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
    "Inspired парфюмерия AUMEKA от 4500₸ и корейская косметика в Астане. Акция 2+1 на все ароматы. Бесплатная доставка по Астане от 5000₸. Заказ через WhatsApp.",
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
