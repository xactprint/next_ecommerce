export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  categorySlug: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
