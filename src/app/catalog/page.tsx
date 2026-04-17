import type { Metadata } from "next";
import { ProductGrid } from "@/components/features/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Каталог — SENSO | Парфюмерия и косметика в Астане",
  description:
    "Весь каталог SENSO: парфюмерная коллекция AUMEKA, K-beauty косметика и подарочные наборы. Доставка по Астане.",
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] pt-20">
      {/* Header */}
      <div
        className="relative pt-16 pb-20 overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        {/* Bloom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, rgba(201,169,110,0.10) 0%, transparent 55%)",
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Promo strip */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 text-xs text-[#C9A96E]"
            style={{
              background: "rgba(201,169,110,0.08)",
              border: "1px solid rgba(201,169,110,0.2)",
            }}
          >
            <span aria-hidden="true">◆</span>
            <span className="tracking-wider uppercase">Акция 2+1 на все ароматы</span>
          </div>

          <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-4">
            Вся коллекция
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl text-[#F5F5F0] leading-none mb-4">
            Каталог
          </h1>
          <p className="text-[#F5F5F0]/40 text-lg max-w-md leading-relaxed">
            Парфюмерная коллекция, K-beauty косметика и подарочные наборы
          </p>
        </div>

        {/* Bottom border gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <ProductGrid />
      </div>
    </div>
  );
}
