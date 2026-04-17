import Link from "next/link";
import { PROMO_2_PLUS_1 } from "@/data/products";

export function PromoStrip() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFFCF5" }}
      aria-label="Акция 2+1"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="inline-block px-10 py-12"
          style={{
            background: "#0E0E0E",
            border: "1px solid rgba(201,169,110,0.15)",
          }}
        >
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
            className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#1A1A1A] px-8 py-3.5 text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#B8944F] transition-colors duration-300"
          >
            Выбрать ароматы
          </Link>
          <p className="mt-4 text-[#F5F5F0]/25 text-xs">
            {PROMO_2_PLUS_1}
          </p>
        </div>
      </div>
    </section>
  );
}
