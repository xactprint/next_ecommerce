"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, ArrowLeft, Truck, RotateCcw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { toast } from "sonner";
import CartSheet from "@/components/CartSheet";

interface Props {
  product: Product;
}

export default function ProductDetailsClient({ product }: Props) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <>
      <CartSheet />
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                {product.category}
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-destructive bg-destructive/10 px-2 py-0.5 rounded">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              <Separator className="mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    className="px-3 py-2 text-lg cursor-pointer hover:bg-muted transition-colors rounded-l-lg"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                  <button
                    className="px-3 py-2 text-lg cursor-pointer hover:bg-muted transition-colors rounded-r-lg"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <Button size="lg" className="w-full cursor-pointer" onClick={handleAdd}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg bg-muted/50">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg bg-muted/50">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium">30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4 rounded-lg bg-muted/50">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium">2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
