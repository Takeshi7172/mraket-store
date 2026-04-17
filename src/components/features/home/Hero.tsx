"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL, FREE_DELIVERY_TEXT, PROMO_2_PLUS_1 } from "@/data/products";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      blob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      aria-label="Главный баннер"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #1a1208 0%, #0A0A0A 60%, #060606 100%)",
        }}
      />

      {/* Morphing golden blob */}
      <div
        ref={blobRef}
        className="absolute z-0 pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(600px, 80vw)",
          height: "min(600px, 80vw)",
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          background:
            "radial-gradient(ellipse at 40% 40%, #C9A96E 0%, #b8864d 30%, #E8C4C4 60%, transparent 75%)",
          filter: "blur(80px)",
          opacity: 0.18,
          animation: "blobMorph 10s ease-in-out infinite",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
        }}
      />

      {/* Aurora accent — rose bottom left */}
      <div
        className="absolute bottom-0 left-0 w-2/3 h-2/3 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 90%, rgba(232,196,196,0.10) 0%, transparent 55%)",
        }}
      />

      {/* Gold bloom top-right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(201,169,110,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Blob keyframes injected via style tag */}
      <style>{`
        @keyframes blobMorph {
          0%   { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          25%  { border-radius: 40% 60% 30% 70% / 60% 40% 70% 50%; }
          50%  { border-radius: 55% 45% 65% 35% / 45% 55% 35% 65%; }
          75%  { border-radius: 35% 65% 45% 55% / 65% 35% 60% 40%; }
          100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-8 opacity-0 animate-fade-in animate-delay-100">
          SENSO COLLECTION
        </p>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F5F0] leading-none tracking-tight mb-6"
          style={{ opacity: 0 }}
        >
          Почувствуй,
          <br />
          <span className="text-[#C9A96E] italic">это</span>{" "}
          SENSO.
        </h1>

        {/* Subline */}
        <p
          ref={sublineRef}
          className="text-[#F5F5F0]/60 text-lg sm:text-xl max-w-xl leading-relaxed mb-6"
          style={{ opacity: 0 }}
        >
          Парфюмерная коллекция для тех, кто выбирает аромат — не бренд.
          <br />
          От <span className="text-[#C9A96E]">4 500 ₸</span> за флакон.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 items-center mb-8"
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

        {/* Delivery + promo pills */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-[#F5F5F0]/50">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 flex-shrink-0 text-[#C9A96E]" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            {FREE_DELIVERY_TEXT}
          </span>
          <span className="hidden sm:block text-[#F5F5F0]/20">·</span>
          <span className="inline-flex items-center gap-1 bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] px-3 py-1 tracking-wider uppercase">
            Акция {PROMO_2_PLUS_1.split("—")[0].trim()}
          </span>
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
