import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfairDisplayHeading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: "ShopNext - Modern E-Commerce Store",
  description: "Discover premium products with an exceptional shopping experience. Shop electronics, fashion, gaming gear, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", "font-sans", inter.variable, playfairDisplayHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster position="top-right" richColors />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


