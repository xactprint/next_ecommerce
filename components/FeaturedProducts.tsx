import { getFeaturedProducts } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Handpicked for You
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
