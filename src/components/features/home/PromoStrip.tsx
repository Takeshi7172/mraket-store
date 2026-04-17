import Link from "next/link";
import { PROMO_2_PLUS_1 } from "@/data/products";

export function PromoStrip() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#0E0E0E" }}
      aria-label="Акция 2+1"
    >
      {/* Top gold separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent)",
        }}
      />

      {/* Subtle gold radial glow behind the number */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-[#C9A96E] text-[9px] tracking-[0.5em] uppercase mb-4">
          Специальное предложение
        </p>
        <p
          className="font-heading text-[#C9A96E] mb-4"
          style={{ fontSize: "clamp(3rem,8vw,5rem)", lineHeight: 1 }}
        >
          2+1
        </p>
        <p className="text-[#F5F5F0]/60 text-base mb-8">
          Два аромата — третий в подарок
        </p>
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#1A1A1A] px-8 py-3.5 text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#B8944F] transition-colors duration-300 rounded-full"
        >
          Выбрать ароматы
        </Link>
        <p className="mt-4 text-[#F5F5F0]/25 text-xs">
          {PROMO_2_PLUS_1}
        </p>
      </div>

      {/* Bottom gold separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent)",
        }}
      />
    </section>
  );
}
