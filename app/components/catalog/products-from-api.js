"use client";

import { useEffect, useState } from "react";
import productCatalog from "../../../data/products.json";
import ProductCarouselSection from "./product-carousel-section";

export default function ProductsFromApi({
  sectionKey,
  title,
  subtitle,
  ariaLabel,
}) {
  const [catalog, setCatalog] = useState(productCatalog);

  useEffect(() => {
    let isActive = true;

    async function loadProducts() {
      try {
        const response = await fetch("/api/products", { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`Products API returned ${response.status}`);
        }

        const nextCatalog = await response.json();
        if (isActive) {
          setCatalog(nextCatalog);
        }
      } catch {
        // Keep the initial catalog if the API request fails.
      }
    }

    loadProducts();

    return () => {
      isActive = false;
    };
  }, []);

  const products = catalog.sections[sectionKey] ?? [];

  return (
    <ProductCarouselSection
      products={products}
      title={title}
      subtitle={subtitle}
      ariaLabel={ariaLabel}
    />
  );
}
