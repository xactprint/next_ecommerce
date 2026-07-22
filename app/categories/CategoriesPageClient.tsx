"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CartSheet from "@/components/CartSheet";
import { ArrowLeft } from "lucide-react";

export default function CategoriesPageClient() {
  const searchParams = useSearchParams();
  const activeSlug = searchParams.get("cat");
  const activeCategory = categories.find((c) => c.slug === activeSlug);
  const categoryProducts = activeSlug ? getProductsByCategory(activeSlug) : [];

  return (
    <>
      <CartSheet />
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              {activeCategory ? activeCategory.name : "Shop by Category"}
            </h1>
            <p className="text-muted-foreground">
              {activeCategory ? activeCategory.description : "Select a category to browse products"}
            </p>
          </div>

          {!activeSlug ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link key={category.id} href={`/categories?cat=${category.slug}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-xl font-bold text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/70">
                        {category.productCount} Products
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <>
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                All Categories
              </Link>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
