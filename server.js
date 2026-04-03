const express = require("express");
const next = require("next");
const {
  createProduct,
  deleteProduct,
  getCatalog,
  getProductById,
  replaceProduct,
  updateProduct,
} = require("./server/catalog-store");

const hasDevFlag = process.argv.includes("--dev");
const hasProdFlag = process.argv.includes("--prod");
const dev = hasDevFlag ? true : hasProdFlag ? false : process.env.NODE_ENV !== "production";
const port = Number.parseInt(process.env.PORT || "3000", 10);
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

function asyncRoute(handler) {
  return function wrappedRoute(req, res, nextMiddleware) {
    Promise.resolve(handler(req, res, nextMiddleware)).catch(nextMiddleware);
  };
}

nextApp
  .prepare()
  .then(() => {
    const server = express();

    server.disable("x-powered-by");
    server.use(express.json({ limit: "1mb" }));

    server.get(
      "/api/products",
      asyncRoute(async (req, res) => {
        const payload = await getCatalog({ section: req.query.section });

        res.setHeader("Cache-Control", "no-store");
        res.status(200).json(payload);
      }),
    );

    server.get(
      "/api/products/:id",
      asyncRoute(async (req, res) => {
        const payload = await getProductById(req.params.id);

        res.setHeader("Cache-Control", "no-store");
        res.status(200).json(payload);
      }),
    );

    server.post(
      "/api/products",
      asyncRoute(async (req, res) => {
        const payload = await createProduct(req.body);

        res.status(201).json({
          message: "Product created successfully.",
          ...payload,
        });
      }),
    );

    server.put(
      "/api/products/:id",
      asyncRoute(async (req, res) => {
        const payload = await replaceProduct(req.params.id, req.body);

        res.status(200).json({
          message: "Product replaced successfully.",
          ...payload,
        });
      }),
    );

    server.patch(
      "/api/products/:id",
      asyncRoute(async (req, res) => {
        const payload = await updateProduct(req.params.id, req.body);

        res.status(200).json({
          message: "Product updated successfully.",
          ...payload,
        });
      }),
    );

    server.delete(
      "/api/products/:id",
      asyncRoute(async (req, res) => {
        const payload = await deleteProduct(req.params.id);

        res.status(200).json({
          message: "Product deleted successfully.",
          ...payload,
        });
      }),
    );

    server.use("/api", (req, res) => {
      res.status(404).json({
        message: "API route not found.",
      });
    });

    server.use((error, req, res, nextMiddleware) => {
      if (res.headersSent) {
        nextMiddleware(error);
        return;
      }

      const isInvalidJson =
        error instanceof SyntaxError && error.status === 400 && "body" in error;
      const status = isInvalidJson ? 400 : error.status || 500;
      const message = isInvalidJson
        ? "Request body contains invalid JSON."
        : status >= 500
          ? "Internal server error."
          : error.message;

      if (status >= 500) {
        console.error(error);
      }

      res.status(status).json({ message });
    });

    server.all(/.*/, (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(
        `Node.js server is running on http://localhost:${port} (${dev ? "development" : "production"} mode)`,
      );
    });
  })
  .catch((error) => {
    console.error("Failed to start the Node.js server.", error);
    process.exit(1);
  });
