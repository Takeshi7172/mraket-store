import type { Metadata } from "next";
import { ProductGrid } from "@/components/features/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Каталог — SENSO | Парфюмерия и косметика в Астане",
  description:
    "Весь каталог SENSO: inspired парфюмерия AUMEKA от 1000₸, K-beauty косметика и подарочные наборы. Доставка по Астане. Заказ через WhatsApp.",
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] pt-20">
      {/* Header */}
      <div className="bg-[#0A0A0A] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4">
            Вся коллекция
          </p>
          <h1 className="font-heading text-4xl lg:text-6xl text-[#F5F5F0]">
            Каталог
          </h1>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <ProductGrid />
      </div>
    </div>
  );
}
