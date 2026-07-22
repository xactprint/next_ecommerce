"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import CartSheet from "@/components/CartSheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const ITEMS_PER_PAGE = 8;

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
];

export default function ProductsPageClient() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (activeCategory !== "all") {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [search, activeCategory, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <>
      <CartSheet />
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-2">All Products</h1>
            <p className="text-muted-foreground">
              Showing {filtered.length} product{filtered.length !== 1 && "s"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-9"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {sortOptions.map((opt) => (
                <Button
                  key={opt.value}
                  variant={sort === opt.value ? "default" : "outline"}
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => setSort(opt.value)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>

            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="sm" className="sm:hidden cursor-pointer" />}>
                  <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Categories</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-1">
                  <button
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors cursor-pointer ${activeCategory === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                    onClick={() => { setActiveCategory("all"); setPage(1); }}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors cursor-pointer ${activeCategory === cat.slug ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                      onClick={() => { setActiveCategory(cat.slug); setPage(1); }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden sm:flex gap-2 mb-6">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
              onClick={() => { setActiveCategory("all"); setPage(1); }}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${activeCategory === cat.slug ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
                onClick={() => { setActiveCategory(cat.slug); setPage(1); }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <Separator className="mb-8" />

          {paginated.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-medium text-muted-foreground">No products found</p>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filter</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginated.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Button
                      key={i}
                      variant={page === i + 1 ? "default" : "outline"}
                      size="icon"
                      className="cursor-pointer"
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
