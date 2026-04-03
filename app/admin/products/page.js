"use client";

import { useEffect, useState } from "react";

const defaultImageClassName = "max-w-[140px] sm:max-w-[150px]";

function createEmptyForm(section = "newArrivals") {
  return {
    section,
    id: "",
    name: "",
    price: "",
    href: "",
    src: "",
    alt: "",
    width: "1024",
    height: "1024",
    imageClassName: defaultImageClassName,
    panelClassName: "bg-white",
  };
}

function productToForm(product, section) {
  return {
    section,
    id: product.id ?? "",
    name: product.name ?? "",
    price: product.price ?? "",
    href: product.href ?? "",
    src: product.src ?? "",
    alt: product.alt ?? "",
    width: String(product.width ?? ""),
    height: String(product.height ?? ""),
    imageClassName: product.imageClassName ?? defaultImageClassName,
    panelClassName: product.panelClassName ?? "bg-white",
  };
}

function getFirstSection(catalog) {
  return Object.keys(catalog?.sections ?? {})[0] ?? "newArrivals";
}

function buildPayload(form, isEditing) {
  const payload = {
    section: form.section.trim(),
    name: form.name.trim(),
    price: form.price.trim(),
    href: form.href.trim(),
    src: form.src.trim(),
    alt: form.alt.trim(),
    width: Number(form.width),
    height: Number(form.height),
    imageClassName: form.imageClassName.trim(),
    panelClassName: form.panelClassName.trim(),
  };

  if (!payload.section) {
    throw new Error("Section is required.");
  }

  if (!payload.name) {
    throw new Error("Product name is required.");
  }

  if (!Number.isFinite(payload.width) || payload.width <= 0) {
    throw new Error("Width must be a positive number.");
  }

  if (!Number.isFinite(payload.height) || payload.height <= 0) {
    throw new Error("Height must be a positive number.");
  }

  if (!isEditing && form.id.trim()) {
    payload.id = form.id.trim();
  }

  return payload;
}

function Field({ label, name, value, onChange, placeholder, disabled = false }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.82rem] font-medium text-[#3a4454]">{label}</span>
      <input
        className="min-h-11 rounded-xl border border-[#d8dce3] bg-white px-3 text-[0.92rem] text-[#1d1d1f] outline-none transition focus:border-[#ff5a36] focus:ring-2 focus:ring-[#ffd7ce]"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </label>
  );
}

export default function AdminProductsPage() {
  const [catalog, setCatalog] = useState({ meta: null, sections: {} });
  const [form, setForm] = useState(createEmptyForm());
  const [editingId, setEditingId] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function loadCatalog() {
    try {
      setLoading(true);
      const response = await fetch("/api/products", { cache: "no-store" });
      const nextCatalog = await response.json();

      if (!response.ok) {
        throw new Error(nextCatalog.message || "Failed to load products.");
      }

      setCatalog(nextCatalog);
    } catch (loadError) {
      setError(loadError.message || "Failed to load products.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCatalog();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function resetForm(section) {
    const nextSection = section || getFirstSection(catalog);
    setEditingId("");
    setForm(createEmptyForm(nextSection));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setNotice("");

    try {
      setSubmitting(true);
      const isEditing = Boolean(editingId);
      const payload = buildPayload(form, isEditing);
      const response = await fetch(
        isEditing ? `/api/products/${editingId}` : "/api/products",
        {
          method: isEditing ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to save product.");
      }

      setNotice(result.message || "Product saved.");
      resetForm(payload.section);
      await loadCatalog();
    } catch (submitError) {
      setError(submitError.message || "Unable to save product.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEdit(product, section) {
    setError("");
    setNotice(`Editing "${product.name}".`);
    setEditingId(product.id);
    setForm(productToForm(product, section));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(product) {
    const confirmed = window.confirm(`Delete "${product.name}"?`);

    if (!confirmed) {
      return;
    }

    setError("");
    setNotice("");

    try {
      setDeletingId(product.id);
      const response = await fetch(`/api/products/${product.id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to delete product.");
      }

      if (editingId === product.id) {
        resetForm();
      }

      setNotice(result.message || "Product deleted.");
      await loadCatalog();
    } catch (deleteError) {
      setError(deleteError.message || "Unable to delete product.");
    } finally {
      setDeletingId("");
    }
  }

  const sections = Object.entries(catalog.sections ?? {});
  const totalProducts = catalog.meta?.productCount ?? 0;
  const updatedAt = catalog.meta?.lastModifiedAt ?? catalog.meta?.updatedAt ?? "";

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f7f8_0%,#ffffff_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-[28px] bg-[#111216] px-5 py-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:px-7 sm:py-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.74rem] font-semibold tracking-[0.2em] text-[#ff8e72]">
              PRODUCT ADMIN
            </p>
            <h1 className="mt-2 text-[clamp(2rem,5vw,3.2rem)] font-semibold tracking-[-0.05em] text-white">
              Manage products
            </h1>
            <p className="mt-3 max-w-[38rem] text-[0.96rem] leading-[1.65] text-[#d6d8de]">
              Add products, update product details, or remove items from the
              Node.js catalog without touching the JSON file manually.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-[0.9rem] text-[#d6d8de]">
            <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
              <p className="text-[0.74rem] uppercase tracking-[0.18em] text-[#ff8e72]">
                Products
              </p>
              <p className="mt-1 text-xl font-semibold text-white">{totalProducts}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
              <p className="text-[0.74rem] uppercase tracking-[0.18em] text-[#ff8e72]">
                Updated
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {updatedAt ? new Date(updatedAt).toLocaleString() : "Not yet"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[380px,minmax(0,1fr)]">
          <section className="rounded-[26px] border border-[#ebeef4] bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-[#1d1d1f]">
                  {editingId ? "Edit product" : "Add product"}
                </h2>
                <p className="mt-1 text-[0.9rem] leading-[1.6] text-[#6e6e73]">
                  {editingId
                    ? "Update the fields below and save the product."
                    : "Fill in the fields below to create a new product."}
                </p>
              </div>

              {editingId ? (
                <button
                  type="button"
                  className="rounded-full border border-[#d8dce3] px-3 py-2 text-[0.82rem] font-medium text-[#3a4454] transition hover:border-[#c6ccd6] hover:bg-[#f6f7fa]"
                  onClick={() => {
                    setNotice("");
                    setError("");
                    resetForm(form.section);
                  }}
                >
                  Cancel
                </button>
              ) : null}
            </div>

            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <Field
                label="Section"
                name="section"
                value={form.section}
                onChange={handleChange}
                placeholder="newArrivals"
              />

              <Field
                label={editingId ? "Product ID" : "Product ID (optional)"}
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="iphone-17-pro"
                disabled={Boolean(editingId)}
              />

              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Apple Vision Pro"
              />

              <Field
                label="Price"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="From $3,499"
              />

              <Field
                label="Product URL"
                name="href"
                value={form.href}
                onChange={handleChange}
                placeholder="https://www.apple.com/..."
              />

              <Field
                label="Image URL"
                name="src"
                value={form.src}
                onChange={handleChange}
                placeholder="https://www.apple.com/..."
              />

              <Field
                label="Image Alt"
                name="alt"
                value={form.alt}
                onChange={handleChange}
                placeholder="Apple Vision Pro"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Width"
                  name="width"
                  value={form.width}
                  onChange={handleChange}
                  placeholder="1024"
                />
                <Field
                  label="Height"
                  name="height"
                  value={form.height}
                  onChange={handleChange}
                  placeholder="1024"
                />
              </div>

              <Field
                label="Image Class"
                name="imageClassName"
                value={form.imageClassName}
                onChange={handleChange}
                placeholder="max-w-[140px] sm:max-w-[150px]"
              />

              <Field
                label="Panel Class"
                name="panelClassName"
                value={form.panelClassName}
                onChange={handleChange}
                placeholder="bg-white"
              />

              {error ? (
                <div className="rounded-2xl border border-[#ffd5cb] bg-[#fff4f1] px-4 py-3 text-[0.9rem] text-[#8f3c28]">
                  {error}
                </div>
              ) : null}

              {notice ? (
                <div className="rounded-2xl border border-[#d8efd8] bg-[#f1fbf1] px-4 py-3 text-[0.9rem] text-[#256245]">
                  {notice}
                </div>
              ) : null}

              <button
                type="submit"
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[#ff5a36] px-5 text-[0.94rem] font-semibold text-white transition hover:bg-[#ed4d29] disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitting}
              >
                {submitting
                  ? "Saving..."
                  : editingId
                    ? "Save changes"
                    : "Create product"}
              </button>
            </form>
          </section>

          <section className="rounded-[26px] border border-[#ebeef4] bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="flex flex-col gap-3 border-b border-[#edf0f5] pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-[#1d1d1f]">
                  Catalog list
                </h2>
                <p className="mt-1 text-[0.9rem] leading-[1.6] text-[#6e6e73]">
                  Open any product below to edit it, or remove it with one click.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="/"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8dce3] px-4 text-[0.88rem] font-medium text-[#3a4454] transition hover:border-[#c6ccd6] hover:bg-[#f6f7fa]"
                >
                  View storefront
                </a>
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8dce3] px-4 text-[0.88rem] font-medium text-[#3a4454] transition hover:border-[#c6ccd6] hover:bg-[#f6f7fa]"
                  onClick={() => loadCatalog()}
                >
                  Refresh
                </button>
              </div>
            </div>

            {loading ? (
              <div className="py-16 text-center text-[0.95rem] text-[#6e6e73]">
                Loading products...
              </div>
            ) : sections.length === 0 ? (
              <div className="py-16 text-center text-[0.95rem] text-[#6e6e73]">
                No products found yet.
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-5">
                {sections.map(([section, products]) => (
                  <div
                    key={section}
                    className="rounded-[24px] border border-[#edf0f5] bg-[#fafbfc] p-4 sm:p-5"
                  >
                    <div className="flex flex-col gap-2 border-b border-[#e9edf4] pb-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[#ff5a36]">
                          Section
                        </p>
                        <h3 className="mt-1 text-[1.08rem] font-semibold text-[#1d1d1f]">
                          {section}
                        </h3>
                      </div>
                      <span className="text-[0.86rem] font-medium text-[#6e6e73]">
                        {products.length} item{products.length === 1 ? "" : "s"}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-col gap-3">
                      {products.map((product) => (
                        <article
                          key={product.id}
                          className="grid gap-4 rounded-[22px] border border-white bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] sm:grid-cols-[80px,minmax(0,1fr),auto]"
                        >
                          <div
                            className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-[18px] border border-[#eef1f6] ${product.panelClassName || "bg-white"}`}
                          >
                            <img
                              src={product.src}
                              alt={product.alt}
                              className="max-h-14 max-w-14 object-contain"
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                              <h4 className="text-[1rem] font-semibold text-[#1d1d1f]">
                                {product.name}
                              </h4>
                              <span className="rounded-full bg-[#f3f5f8] px-2.5 py-1 text-[0.76rem] font-medium text-[#657084]">
                                {product.id}
                              </span>
                            </div>
                            <p className="mt-1 text-[0.92rem] font-medium text-[#ff5a36]">
                              {product.price}
                            </p>
                            <p className="mt-2 line-clamp-1 text-[0.84rem] text-[#6e6e73]">
                              {product.href}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2 text-[0.78rem] text-[#7c8799]">
                              <span className="rounded-full bg-[#f7f8fa] px-2.5 py-1">
                                {product.width} x {product.height}
                              </span>
                              <span className="rounded-full bg-[#f7f8fa] px-2.5 py-1">
                                {product.panelClassName}
                              </span>
                            </div>
                          </div>

                          <div className="flex gap-2 sm:flex-col">
                            <button
                              type="button"
                              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d8dce3] px-4 text-[0.84rem] font-medium text-[#3a4454] transition hover:border-[#c6ccd6] hover:bg-[#f6f7fa]"
                              onClick={() => handleEdit(product, section)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#111216] px-4 text-[0.84rem] font-medium text-white transition hover:bg-[#000000] disabled:cursor-not-allowed disabled:opacity-60"
                              onClick={() => handleDelete(product)}
                              disabled={deletingId === product.id}
                            >
                              {deletingId === product.id ? "Deleting..." : "Delete"}
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
