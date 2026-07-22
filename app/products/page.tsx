import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Products | ShopNext",
  description: "Browse our complete collection of premium products.",
};

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageClient />
    </Suspense>
  );
}
