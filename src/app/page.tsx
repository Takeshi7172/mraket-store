import type { Metadata } from "next";
import { HeroSection } from "@/components/features/home/HeroSection";
import { MarqueeStrip } from "@/components/features/home/MarqueeStrip";
import { StorySection } from "@/components/features/home/StorySection";
import { HorizontalProducts } from "@/components/features/home/HorizontalProducts";
import { StatsSection } from "@/components/features/home/StatsSection";
import { PromoSection } from "@/components/features/home/PromoSection";
import { TestimonialsSection } from "@/components/features/home/TestimonialsSection";
import { HowToOrder } from "@/components/features/home/HowToOrder";
import { FinalCTA } from "@/components/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "SENSO — Inspired парфюмерия и K-beauty в Астане",
  description:
    "SENSO — парфюмерные кураторы в Астане. Подбираем ароматы под характер и настроение. Акция 2+1. Доставка по Астане.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <StorySection />
      <HorizontalProducts />
      <StatsSection />
      <PromoSection />
      <TestimonialsSection />
      <HowToOrder />
      <FinalCTA />
    </>
  );
}
