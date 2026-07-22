"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>New Collection Available</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Discover the{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Future
            </span>{" "}
            of Shopping
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Curated premium products designed for the modern lifestyle. From cutting-edge electronics to timeless fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button size="lg" className="w-full sm:w-auto cursor-pointer text-base px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/categories">
              <Button size="lg" variant="outline" className="w-full sm:w-auto cursor-pointer text-base px-8">
                Browse Categories
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              Free Shipping on $100+
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              30-Day Returns
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
