import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CartSheet from "@/components/CartSheet";

export const metadata: Metadata = {
  title: "Contact Us | ShopNext",
  description: "Get in touch with our team. We'd love to hear from you.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@shopnext.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+1 (555) 123-4567",
    sub: "Mon-Fri 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "123 Commerce Street",
    sub: "New York, NY 10001",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon - Fri: 9am - 6pm",
    sub: "Weekend: Closed",
  },
];

export default function ContactPage() {
  return (
    <>
      <CartSheet />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Get In Touch</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a question or feedback? We&apos;d love to hear from you. Our team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="border-0 bg-muted/30">
                  <CardContent className="flex items-start gap-4 pt-6 pb-6 px-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.detail}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{info.sub}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
