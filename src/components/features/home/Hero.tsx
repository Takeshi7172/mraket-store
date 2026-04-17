"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/data/products";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [headlineRef.current, sublineRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 1s ease, transform 1s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 200);
    });
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      aria-label="Главный баннер"
    >
      {/* Background gradient — dark luxury */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #1a1208 0%, #0A0A0A 60%, #060606 100%)",
        }}
      />

      {/* Gold light bloom top-right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(201,169,110,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Rose light bloom bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 90%, rgba(232,196,196,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-8 opacity-0 animate-fade-in animate-delay-100">
          AUMEKA — Inspired Collection
        </p>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F5F0] leading-none tracking-tight mb-6"
          style={{ opacity: 0 }}
        >
          Аромат,
          <br />
          <span className="text-[#C9A96E] italic">который</span>
          <br />
          запоминают
        </h1>

        {/* Subline */}
        <p
          ref={sublineRef}
          className="text-[#F5F5F0]/60 text-lg sm:text-xl max-w-xl leading-relaxed mb-12"
          style={{ opacity: 0 }}
        >
          Inspired парфюмерия и корейская косметика в Астане.
          <br />
          От <span className="text-[#C9A96E]">1 000 ₸</span> за флакон 60 мл.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 items-center"
          style={{ opacity: 0 }}
        >
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0A0A0A] px-8 py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-[#e0c080] transition-colors duration-300"
          >
            Смотреть каталог
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#F5F5F0]/30 text-[#F5F5F0] px-8 py-3.5 text-sm tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Заказать в WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[#F5F5F0] text-xs tracking-widest uppercase">
          Листать
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A96E] to-transparent" />
      </div>
    </section>
  );
}
