import type { Metadata } from "next";
import { HeroSection } from "@/components/features/home/HeroSection";
import { FeaturedGrid } from "@/components/features/home/FeaturedGrid";
import { HowToOrder } from "@/components/features/home/HowToOrder";
import { PromoStrip } from "@/components/features/home/PromoStrip";
import { FinalCTA } from "@/components/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "SENZA — Ароматы, уход и подарки в Астане",
  description:
    "SENZA — ароматы и корейская косметика в Астане. Акция 1+1 на парфюмерию. Доставка по городу.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedGrid />
      <PromoStrip />
      <HowToOrder />
      <FinalCTA />
    </>
  );
}
