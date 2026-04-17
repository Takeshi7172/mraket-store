import type { Metadata } from "next";
import { Hero } from "@/components/features/home/Hero";
import { FeaturedProducts } from "@/components/features/home/FeaturedProducts";
import { BrandStatement } from "@/components/features/home/BrandStatement";
import { TestimonialCarousel } from "@/components/features/home/TestimonialCarousel";
import { HomeCTA } from "@/components/features/home/HomeCTA";

export const metadata: Metadata = {
  title: "SENSO — Inspired парфюмерия и K-beauty в Астане",
  description:
    "Inspired парфюмерия AUMEKA от 4500₸ и корейская косметика в Астане. Акция 2+1 на все ароматы. Бесплатная доставка по Астане от 5000₸. Заказ через WhatsApp.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BrandStatement />
      <TestimonialCarousel />
      <HomeCTA />
    </>
  );
}
