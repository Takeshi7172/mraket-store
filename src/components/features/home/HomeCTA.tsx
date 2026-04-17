import Link from "next/link";
import { WHATSAPP_URL, PROMO_2_PLUS_1, FREE_DELIVERY_TEXT } from "@/data/products";
import { SectionReveal } from "@/components/features/home/SectionReveal";

export function HomeCTA() {
  return (
    <section
      className="py-28 lg:py-44 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0A0A0A 0%, #1a1208 40%, #160f05 70%, #0A0A0A 100%)",
      }}
      aria-labelledby="home-cta-heading"
    >
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

      {/* Bloom accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <SectionReveal>
          <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-8">
            Первый заказ — сегодня
          </p>
          <h2
            id="home-cta-heading"
            className="font-heading text-5xl lg:text-7xl xl:text-8xl text-[#F5F5F0] leading-tight mb-8"
          >
            Твои чувства,
            <br />
            <span className="text-[#C9A96E] italic">твой аромат</span>
          </h2>
          <p className="text-[#F5F5F0]/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Не знаете, что выбрать? Напишите нам в WhatsApp — поможем подобрать
            аромат под ваш характер и настроение.
          </p>

          {/* Promo card */}
          <div
            className="inline-flex items-center gap-3 px-6 py-4 mb-12 text-sm"
            style={{
              background: "rgba(201,169,110,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(201,169,110,0.2)",
            }}
          >
            <span className="text-[#C9A96E]" aria-hidden="true">◆</span>
            <span className="text-[#F5F5F0]/70">
              <span className="text-[#C9A96E] font-medium">Акция:</span>{" "}
              {PROMO_2_PLUS_1}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C9A96E] text-[#0A0A0A] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#e0c080] transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </a>
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 text-[#F5F5F0]/60 px-10 py-4 text-sm tracking-widest uppercase hover:text-[#C9A96E] transition-colors duration-300"
              style={{
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Весь каталог
            </Link>
          </div>

          {/* Delivery note */}
          <p className="text-[#F5F5F0]/25 text-xs tracking-widest uppercase mt-10">
            {FREE_DELIVERY_TEXT} · Kaspi QR
          </p>
        </SectionReveal>
      </div>

      {/* Gold accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />
    </section>
  );
}
