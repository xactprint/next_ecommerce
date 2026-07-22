import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import CartSheet from "@/components/CartSheet";

export default function Home() {
  return (
    <>
      <CartSheet />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
    </>
  );
}
