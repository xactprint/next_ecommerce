import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    description:
      "Cutting-edge gadgets, devices, and tech accessories for the modern lifestyle.",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
    productCount: 5,
  },
  {
    id: "2",
    name: "Fashion",
    slug: "fashion",
    description:
      "Curated clothing, bags, and accessories for every occasion and season.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    productCount: 4,
  },
  {
    id: "3",
    name: "Accessories",
    slug: "accessories",
    description:
      "Essential accessories that combine functionality with refined aesthetics.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    productCount: 4,
  },
  {
    id: "4",
    name: "Gaming",
    slug: "gaming",
    description:
      "Top-tier gaming gear for competitive players and casual enthusiasts alike.",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&h=400&fit=crop",
    productCount: 3,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
