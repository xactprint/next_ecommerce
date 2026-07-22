import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Users, Award, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CartSheet from "@/components/CartSheet";

export const metadata: Metadata = {
  title: "About Us | ShopNext",
  description: "Learn about ShopNext - our mission, vision, and the team behind the store.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make premium products accessible to everyone while delivering an exceptional shopping experience that exceeds expectations.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the world's most trusted e-commerce platform, known for quality, innovation, and customer-centric service.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Quality first, transparency always, sustainability matters, and every customer interaction is an opportunity to delight.",
  },
];

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    bio: "Passionate about creating seamless shopping experiences with over 10 years in e-commerce.",
  },
  {
    name: "Sarah Kim",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    bio: "Award-winning designer focused on crafting beautiful, user-friendly interfaces.",
  },
  {
    name: "David Chen",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "Full-stack developer building robust, scalable systems that power our platform.",
  },
  {
    name: "Maya Patel",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    bio: "Creative strategist driving brand growth and connecting with customers worldwide.",
  },
];

const stats = [
  { icon: Users, label: "Happy Customers", value: "50K+" },
  { icon: Award, label: "Products Sold", value: "120K+" },
  { icon: Zap, label: "Orders Delivered", value: "98%" },
  { icon: Heart, label: "5-Star Reviews", value: "8K+" },
];

export default function AboutPage() {
  return (
    <>
      <CartSheet />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">About ShopNext</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Redefining Modern Shopping
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2024, ShopNext was born from a simple idea: everyone deserves access to premium
              products without compromise. We curate the finest electronics, fashion, and accessories,
              delivering them with unmatched service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border-0 bg-muted/30">
                <CardContent className="pt-8 pb-6">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value) => (
              <Card key={value.title} className="border-0 bg-muted/20">
                <CardContent className="pt-8 pb-6 px-6">
                  <value.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
