import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailsClient from "./ProductDetailsClient";
import { getProductById, products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | ShopNext`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  return <ProductDetailsClient product={product} />;
}
