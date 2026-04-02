"use client";

import { useEffect, useState } from "react";
import { productCatalog } from "../lib/products-catalog";
import ProductCarouselSection from "./product-carousel-section";

export default function ProductsFromApi() {
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

  return (
    <>
      <ProductCarouselSection products={catalog.sections.newArrivals} />

      <ProductCarouselSection
        products={catalog.sections.bestSellers}
        title="Best Sellers"
        subtitle="Real Apple products customers are shopping for now."
        ariaLabel="Best sellers"
      />
    </>
  );
}
