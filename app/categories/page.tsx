import type { Metadata } from "next";
import { Suspense } from "react";
import CategoriesPageClient from "./CategoriesPageClient";

export const metadata: Metadata = {
  title: "Categories | ShopNext",
  description: "Browse products by category.",
};

export default function CategoriesPage() {
  return (
    <Suspense>
      <CategoriesPageClient />
    </Suspense>
  );
}
