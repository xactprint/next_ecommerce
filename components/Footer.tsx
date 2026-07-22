import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "Electronics", href: "/categories?cat=electronics" },
    { label: "Fashion", href: "/categories?cat=fashion" },
    { label: "Accessories", href: "/categories?cat=accessories" },
    { label: "Gaming", href: "/categories?cat=gaming" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight font-heading">ShopNext</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Premium products for the modern lifestyle. We curate the best in electronics, fashion, and accessories.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce Street, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@shopnext.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-10" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ShopNext. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
