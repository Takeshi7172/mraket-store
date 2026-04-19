"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function PromoStrip() {
  return (
    <section
      className="relative py-28 lg:py-36 px-6 overflow-hidden"
      style={{ background: "#FAF5ED" }}
      aria-label="Акция 1+1"
    >
      {/* Copper glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 50% 50%, rgba(196,149,106,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-6">
          Специальное предложение
        </p>

        <p
          className="font-heading font-light text-[#1A1814] mb-4"
          style={{ fontSize: "clamp(4rem, 10vw, 7rem)", lineHeight: 0.9 }}
        >
          1+1
        </p>

        <p className="text-[#1A1814]/50 text-lg mb-10">
          Купи один аромат — второй в подарок
        </p>

        <Link
          href="/catalog"
          className="inline-flex items-center gap-3 bg-[#0B0A08] text-[#E8E2D8] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#C4956A] hover:text-[#0B0A08] transition-colors duration-400"
        >
          Выбрать ароматы
        </Link>

        <p className="mt-6 text-[#1A1814]/25 text-xs">
          Акция действует на всю парфюмерную коллекцию AUMEKA
        </p>
      </motion.div>
    </section>
  );
}
