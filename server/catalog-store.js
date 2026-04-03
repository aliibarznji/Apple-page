const fs = require("fs/promises");
const path = require("path");

const dataFilePath = path.join(process.cwd(), "data", "products.json");
const stringFields = [
  "name",
  "price",
  "href",
  "src",
  "alt",
  "imageClassName",
  "panelClassName",
];
const numberFields = ["width", "height"];

let writeQueue = Promise.resolve();

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}

function createHttpError(status, message) {
  return new HttpError(status, message);
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function validateProductId(id) {
  if (typeof id !== "string" || !id.trim()) {
    throw createHttpError(400, "Product id must be a non-empty string.");
  }

  return id.trim();
}

function validateSectionName(section, { required = true } = {}) {
  if (section === undefined) {
    if (required) {
      throw createHttpError(400, 'Field "section" is required.');
    }

    return undefined;
  }

  if (typeof section !== "string" || !section.trim()) {
    throw createHttpError(400, 'Field "section" must be a non-empty string.');
  }

  return section.trim();
}

function slugify(value) {
  return (
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "product"
  );
}

function countProducts(sections) {
  return Object.values(sections).reduce((total, products) => {
    return total + products.length;
  }, 0);
}

function normalizeCatalog(catalog) {
  const rawSections = isPlainObject(catalog?.sections) ? catalog.sections : {};
  const sections = Object.fromEntries(
    Object.entries(rawSections).map(([section, products]) => {
      const normalizedProducts = Array.isArray(products)
        ? products.filter(isPlainObject)
        : [];

      return [section, normalizedProducts];
    }),
  );

  const now = new Date().toISOString();

  return {
    meta: {
      currency: catalog?.meta?.currency || "USD",
      source: catalog?.meta?.source || "Official Apple U.S. pricing",
      updatedAt: catalog?.meta?.updatedAt || now.slice(0, 10),
      lastModifiedAt: catalog?.meta?.lastModifiedAt || now,
      productCount: countProducts(sections),
    },
    sections,
  };
}

async function ensureDataFile() {
  try {
    await fs.access(dataFilePath);
  } catch {
    const emptyCatalog = normalizeCatalog({
      meta: {
        currency: "USD",
        source: "Official Apple U.S. pricing",
      },
      sections: {},
    });

    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(
      dataFilePath,
      `${JSON.stringify(emptyCatalog, null, 2)}\n`,
      "utf8",
    );
  }
}

async function readCatalog() {
  await ensureDataFile();

  const fileContents = await fs.readFile(dataFilePath, "utf8");
  return normalizeCatalog(JSON.parse(fileContents));
}

function stampCatalog(catalog) {
  const normalizedCatalog = normalizeCatalog(catalog);
  const now = new Date().toISOString();

  normalizedCatalog.meta.updatedAt = now.slice(0, 10);
  normalizedCatalog.meta.lastModifiedAt = now;
  normalizedCatalog.meta.productCount = countProducts(normalizedCatalog.sections);

  return normalizedCatalog;
}

async function writeCatalog(catalog) {
  const stampedCatalog = stampCatalog(catalog);

  await fs.writeFile(
    dataFilePath,
    `${JSON.stringify(stampedCatalog, null, 2)}\n`,
    "utf8",
  );

  return stampedCatalog;
}

function runSerialized(operation) {
  const queuedOperation = writeQueue.then(operation, operation);

  writeQueue = queuedOperation.catch(() => {});

  return queuedOperation;
}

function validateProductInput(payload, { partial = false } = {}) {
  if (!isPlainObject(payload)) {
    throw createHttpError(400, "Request body must be a JSON object.");
  }

  const product = {};

  for (const field of stringFields) {
    const value = payload[field];

    if (value === undefined) {
      if (!partial) {
        throw createHttpError(400, `Missing required field "${field}".`);
      }

      continue;
    }

    if (typeof value !== "string" || !value.trim()) {
      throw createHttpError(400, `Field "${field}" must be a non-empty string.`);
    }

    product[field] = value.trim();
  }

  for (const field of numberFields) {
    const value = payload[field];

    if (value === undefined) {
      if (!partial) {
        throw createHttpError(400, `Missing required field "${field}".`);
      }

      continue;
    }

    if (
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      value <= 0
    ) {
      throw createHttpError(
        400,
        `Field "${field}" must be a positive number.`,
      );
    }

    product[field] = value;
  }

  if (payload.id !== undefined) {
    product.id = validateProductId(payload.id);
  }

  return product;
}

function findProductLocation(catalog, id) {
  for (const [section, products] of Object.entries(catalog.sections)) {
    const index = products.findIndex((product) => product.id === id);

    if (index !== -1) {
      return {
        section,
        index,
        product: products[index],
      };
    }
  }

  return null;
}

function ensureUniqueProductId(catalog, id, currentId) {
  const existingProduct = findProductLocation(catalog, id);

  if (!existingProduct || existingProduct.product.id === currentId) {
    return;
  }

  throw createHttpError(409, `A product with id "${id}" already exists.`);
}

function generateUniqueProductId(catalog, preferredValue) {
  const baseId = slugify(preferredValue);
  let candidateId = baseId;
  let suffix = 2;

  while (findProductLocation(catalog, candidateId)) {
    candidateId = `${baseId}-${suffix}`;
    suffix += 1;
  }

  return candidateId;
}

function cloneSections(sections) {
  return Object.fromEntries(
    Object.entries(sections).map(([section, products]) => [section, [...products]]),
  );
}

function validateUpdatePayload(payload) {
  if (!isPlainObject(payload)) {
    throw createHttpError(400, "Request body must be a JSON object.");
  }

  if (Object.keys(payload).length === 0) {
    throw createHttpError(400, "Request body cannot be empty.");
  }
}

async function getCatalog({ section } = {}) {
  const catalog = await readCatalog();

  if (!section) {
    return catalog;
  }

  const normalizedSection = validateSectionName(section);

  return {
    meta: catalog.meta,
    section: normalizedSection,
    products: catalog.sections[normalizedSection] ?? [],
  };
}

async function getProductById(id) {
  const productId = validateProductId(id);
  const catalog = await readCatalog();
  const productLocation = findProductLocation(catalog, productId);

  if (!productLocation) {
    throw createHttpError(404, `No product was found with id "${productId}".`);
  }

  return {
    meta: catalog.meta,
    section: productLocation.section,
    product: productLocation.product,
  };
}

async function createProduct(payload) {
  return runSerialized(async () => {
    validateUpdatePayload(payload);

    const catalog = await readCatalog();
    const section = validateSectionName(payload.section);
    const productInput = validateProductInput(payload);
    const requestedId =
      productInput.id ?? generateUniqueProductId(catalog, productInput.name);

    ensureUniqueProductId(catalog, requestedId);

    const nextProduct = {
      ...productInput,
      id: requestedId,
    };

    const nextSections = cloneSections(catalog.sections);
    const targetSection = nextSections[section] ?? [];

    targetSection.push(nextProduct);
    nextSections[section] = targetSection;

    const savedCatalog = await writeCatalog({
      ...catalog,
      sections: nextSections,
    });

    return {
      meta: savedCatalog.meta,
      section,
      product: nextProduct,
    };
  });
}

async function replaceProduct(id, payload) {
  return runSerialized(async () => {
    validateUpdatePayload(payload);

    const productId = validateProductId(id);
    const catalog = await readCatalog();
    const existingProduct = findProductLocation(catalog, productId);

    if (!existingProduct) {
      throw createHttpError(404, `No product was found with id "${productId}".`);
    }

    if (
      payload.id !== undefined &&
      validateProductId(payload.id) !== productId
    ) {
      throw createHttpError(400, "Changing a product id is not supported.");
    }

    const section = validateSectionName(payload.section);
    const productInput = validateProductInput(payload);
    const nextProduct = {
      ...productInput,
      id: productId,
    };

    const nextSections = cloneSections(catalog.sections);
    nextSections[existingProduct.section].splice(existingProduct.index, 1);

    if (section === existingProduct.section) {
      nextSections[section].splice(existingProduct.index, 0, nextProduct);
    } else {
      const targetSection = nextSections[section] ?? [];
      targetSection.push(nextProduct);
      nextSections[section] = targetSection;
    }

    const savedCatalog = await writeCatalog({
      ...catalog,
      sections: nextSections,
    });

    return {
      meta: savedCatalog.meta,
      section,
      previousSection: existingProduct.section,
      product: nextProduct,
    };
  });
}

async function updateProduct(id, payload) {
  return runSerialized(async () => {
    validateUpdatePayload(payload);

    const productId = validateProductId(id);
    const catalog = await readCatalog();
    const existingProduct = findProductLocation(catalog, productId);

    if (!existingProduct) {
      throw createHttpError(404, `No product was found with id "${productId}".`);
    }

    if (
      payload.id !== undefined &&
      validateProductId(payload.id) !== productId
    ) {
      throw createHttpError(400, "Changing a product id is not supported.");
    }

    const section =
      payload.section === undefined
        ? existingProduct.section
        : validateSectionName(payload.section);
    const productPatch = validateProductInput(payload, { partial: true });

    if (
      Object.keys(productPatch).length === 0 &&
      payload.section === undefined
    ) {
      throw createHttpError(
        400,
        "Provide at least one product field or a new section to update.",
      );
    }

    const nextProduct = {
      ...existingProduct.product,
      ...productPatch,
      id: productId,
    };

    const nextSections = cloneSections(catalog.sections);
    nextSections[existingProduct.section].splice(existingProduct.index, 1);

    if (section === existingProduct.section) {
      nextSections[section].splice(existingProduct.index, 0, nextProduct);
    } else {
      const targetSection = nextSections[section] ?? [];
      targetSection.push(nextProduct);
      nextSections[section] = targetSection;
    }

    const savedCatalog = await writeCatalog({
      ...catalog,
      sections: nextSections,
    });

    return {
      meta: savedCatalog.meta,
      section,
      previousSection: existingProduct.section,
      product: nextProduct,
    };
  });
}

async function deleteProduct(id) {
  return runSerialized(async () => {
    const productId = validateProductId(id);
    const catalog = await readCatalog();
    const existingProduct = findProductLocation(catalog, productId);

    if (!existingProduct) {
      throw createHttpError(404, `No product was found with id "${productId}".`);
    }

    const nextSections = cloneSections(catalog.sections);
    nextSections[existingProduct.section].splice(existingProduct.index, 1);

    const savedCatalog = await writeCatalog({
      ...catalog,
      sections: nextSections,
    });

    return {
      meta: savedCatalog.meta,
      section: existingProduct.section,
      product: existingProduct.product,
    };
  });
}

module.exports = {
  createProduct,
  deleteProduct,
  getCatalog,
  getProductById,
  replaceProduct,
  updateProduct,
};
