import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Browse by Category
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Shop Categories
          </h2>
        </div>
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
                  <p className="text-sm text-white/70 mb-3">
                    {category.productCount} Products
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    Explore <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
