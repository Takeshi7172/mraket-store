"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/data/products";

interface HeroProductProps {
  src: string;
  alt: string;
  priority?: boolean;
}

function HeroProduct({ src, alt, priority = false }: HeroProductProps) {
  return (
    <div className="relative w-full aspect-[3/4]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 22vw"
        priority={priority}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-[100dvh] px-6 lg:px-12 overflow-hidden gap-10 lg:gap-16"
      aria-label="Главный баннер"
      style={{ background: "#FAF5ED" }}
    >
      {/* Left — text */}
      <motion.div
        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md w-full pt-24 lg:pt-0 flex-shrink-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-6">
          Астана · Ароматы · Уход
        </p>

        <h1
          className="font-heading font-light leading-[0.9] tracking-tight text-[#1A1814] mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
        >
          SENZA
        </h1>

        <p className="text-[#1A1814]/55 text-base sm:text-lg leading-relaxed mb-10 max-w-sm">
          Ароматы и уход. Выбрали лучшее — привезём в Астану.
        </p>

        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto">
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center bg-[#C4956A] text-[#0B0A08] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#D4A87E] transition-colors duration-300 w-full sm:w-auto"
          >
            Смотреть каталог
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 border border-[#1A1814]/15 text-[#1A1814]/50 px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-[#C4956A]/50 hover:text-[#C4956A] transition-all duration-300 w-full sm:w-auto"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Написать в WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Right — product showcase */}
      <motion.div
        className="flex items-end justify-center gap-4 sm:gap-6 w-full max-w-sm lg:max-w-md pb-10 lg:pb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Taller center product */}
        <div className="w-[38%] flex-shrink-0 -mb-4">
          <HeroProduct
            src="/products/barakkat-rouge-540.png"
            alt="Barakkat Rouge 540"
            priority
          />
        </div>
        <div className="w-[34%] flex-shrink-0">
          <HeroProduct
            src="/products/lost-cherry.png"
            alt="Lost Cherry"
            priority
          />
        </div>
        <div className="w-[28%] flex-shrink-0 -mb-2">
          <HeroProduct
            src="/products/kiko-milano-liquid-skin.png"
            alt="KIKO Milano Liquid Skin"
          />
        </div>
      </motion.div>
    </section>
  );
}
