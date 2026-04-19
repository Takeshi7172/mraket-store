"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/data/products";

export function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[100dvh] overflow-hidden"
      aria-label="Главный баннер"
      style={{ background: "#0B0A08" }}
    >
      {/* Background — asymmetric image mosaic */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Large left image */}
        <div className="absolute top-0 left-0 w-[45%] h-full">
          <Image
            src="/products/photo_10.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="45vw"
            priority
          />
        </div>
        {/* Top right */}
        <div className="absolute top-0 right-0 w-[55%] h-[55%]">
          <Image
            src="/products/photo_9.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="55vw"
            priority
          />
        </div>
        {/* Bottom right */}
        <div className="absolute bottom-0 right-0 w-[55%] h-[45%]">
          <Image
            src="/products/photo_4.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="55vw"
            priority
          />
        </div>
      </div>

      {/* Heavy darkening overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "rgba(11,10,8,0.72)" }}
      />

      {/* Copper radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 48%, rgba(196,149,106,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,10,8,0.6) 0%, rgba(11,10,8,0.1) 40%, rgba(11,10,8,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          className="text-[#C4956A] text-[9px] sm:text-[10px] tracking-[0.6em] uppercase mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ароматы &middot; Уход &middot; Косметика
        </motion.p>

        {/* Headline — dramatic scale */}
        <motion.h1
          className="font-heading font-light leading-[0.88] tracking-tight select-none text-[#E8E2D8] mb-8"
          style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="block">Почувствуй</span>
          <span className="block mt-[-0.05em]">
            <em className="text-[#C4956A] font-light" style={{ fontStyle: "italic" }}>
              это
            </em>{" "}
            SENZA
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="text-[#E8E2D8]/40 text-base sm:text-lg max-w-md leading-relaxed mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Мы перепробовали сотни продуктов и оставили лучшее.<br className="hidden sm:block" /> Ароматы, уход, косметика — с доставкой по Астане.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/catalog"
            className="group relative inline-flex items-center gap-3 bg-[#C4956A] text-[#0B0A08] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium overflow-hidden transition-colors duration-500 hover:bg-[#D4A87E]"
          >
            <span className="relative z-10">Смотреть коллекцию</span>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#E8E2D8]/15 text-[#E8E2D8]/60 px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-[#C4956A]/40 hover:text-[#C4956A] transition-all duration-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Заказать в WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Bottom info strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="divider-copper" />
        <div className="flex items-center justify-between px-6 lg:px-12 py-4 text-[9px] tracking-[0.4em] uppercase">
          <span className="text-[#E8E2D8]/20">
            Бесплатная доставка от 5 000 ₸
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[#E8E2D8]/15">Листать</span>
            <svg
              className="w-3 h-3 text-[#C4956A] animate-scroll-hint"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4" />
            </svg>
          </div>
          <span className="text-[#C4956A]/50">
            Акция 1+1
          </span>
        </div>
      </motion.div>
    </section>
  );
}
