"use client";

import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function CartSheet() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader className="space-y-0">
          <SheetTitle className="flex items-center gap-2 text-lg">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({items.length} {items.length === 1 ? "item" : "items"})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <ShoppingBag className="h-16 w-16 mb-4 opacity-20" />
            <p className="font-medium">Your cart is empty</p>
            <p className="text-sm mt-1">Add some products to get started</p>
            <Button className="mt-6 cursor-pointer" onClick={() => setIsOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-1">{item.product.name}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 cursor-pointer"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 cursor-pointer"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive cursor-pointer"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full cursor-pointer" size="lg">
                Checkout
              </Button>
              <Button variant="outline" className="w-full cursor-pointer" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
