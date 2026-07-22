"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      toast.success("Thanks for subscribing! Check your inbox.");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Stay in the Loop
        </h2>
        <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
          Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and more.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            required
          />
          <Button
            type="submit"
            variant="secondary"
            disabled={loading}
            className="cursor-pointer shrink-0"
          >
            {loading ? "Subscribing..." : "Subscribe"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
