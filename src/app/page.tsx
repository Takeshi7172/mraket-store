import type { Metadata } from "next";
import { HeroSection } from "@/components/features/home/HeroSection";
import { BrandIntro } from "@/components/features/home/BrandIntro";
import { FeaturedGrid } from "@/components/features/home/FeaturedGrid";
import { StorySection } from "@/components/features/home/StorySection";
import { HowToOrder } from "@/components/features/home/HowToOrder";
import { PromoStrip } from "@/components/features/home/PromoStrip";
import { TestimonialsSection } from "@/components/features/home/TestimonialsSection";
import { FinalCTA } from "@/components/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "SENZA — Ароматы, уход и подарки в Астане",
  description:
    "SENZA — кураторы чувств в Астане. Подбираем ароматы, уход и подарки под твоё настроение. Акция 1+1. Доставка по Астане.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntro />
      <FeaturedGrid />
      <StorySection />
      <PromoStrip />
      <HowToOrder />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
