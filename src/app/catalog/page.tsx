import type { Metadata } from "next";
import { PromoFeed } from "@/components/features/catalog/PromoFeed";

export const metadata: Metadata = {
  title: "Каталог — SENZA | Ароматы, уход и подарки в Астане",
  description:
    "Весь каталог SENZA: ароматы AUMEKA и корейская косметика. Доставка по Астане.",
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#FAF5ED] pt-[64px] lg:pt-[80px]">
      {/* Hero Header */}
      <div
        className="relative pt-14 pb-18 overflow-hidden"
        style={{ background: "#0B0A08" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, rgba(196,149,106,0.08) 0%, transparent 55%)",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Promo strip */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 text-[10px] text-[#C4956A]"
            style={{
              background: "rgba(196,149,106,0.06)",
              border: "1px solid rgba(196,149,106,0.15)",
            }}
          >
            <span aria-hidden="true" className="text-[8px]">&#9670;</span>
            <span className="tracking-[0.25em] uppercase">Акция 1+1 на все ароматы</span>
          </div>

          <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-4">
            Вся коллекция
          </p>
          <h1
            className="font-heading font-light text-[#E8E2D8] leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            Каталог
          </h1>
          <p className="text-[#E8E2D8]/35 text-base max-w-md leading-relaxed">
            Парфюмерия AUMEKA и корейская косметика — всё в одном месте
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 divider-copper" />
      </div>

      {/* Promo Feed */}
      <PromoFeed />
    </div>
  );
}
