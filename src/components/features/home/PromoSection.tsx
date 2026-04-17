"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROMO_2_PLUS_1 } from "@/data/products";

export function PromoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bigTextY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cardY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-40 flex items-center justify-center min-h-[70vh]"
      style={{ background: "#050505" }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 text-center">
        {/* Huge number */}
        <motion.div style={{ y: bigTextY }} aria-hidden="true">
          <span
            className="font-heading text-[clamp(8rem,25vw,18rem)] text-[#C9A96E] leading-none tracking-tight block select-none"
            style={{
              WebkitTextStroke: "1px rgba(201,169,110,0.4)",
              WebkitTextFillColor: "transparent",
            }}
          >
            2+1
          </span>
        </motion.div>

        {/* Card */}
        <motion.div
          style={{
            y: cardY,
            background: "rgba(201,169,110,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201,169,110,0.2)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-6 mx-auto max-w-2xl px-10 py-10"
        >
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C9A96E]/50" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C9A96E]/50" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#C9A96E]/50" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#C9A96E]/50" />

          <p className="text-[#C9A96E] text-[9px] tracking-[0.6em] uppercase mb-5">
            Специальное предложение
          </p>

          <h2 className="font-heading text-2xl lg:text-4xl text-[#F5F5F0] leading-tight mb-4">
            {PROMO_2_PLUS_1.split("—")[1]?.trim() ?? "Купи 2 аромата, получи третий в подарок"}
          </h2>

          <p className="text-[#F5F5F0]/45 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Попробуй два аромата из коллекции и получи третий — наш подарок тебе.
          </p>

          <Link
            href="/catalog?category=perfume"
            className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0A0A0A] px-10 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#e0c080] transition-colors duration-300"
          >
            Выбрать ароматы
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
