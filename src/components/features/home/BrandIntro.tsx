"use client";

import { motion } from "framer-motion";

export function BrandIntro() {
  return (
    <section
      className="relative py-32 lg:py-44 px-6 overflow-hidden"
      style={{ background: "#0B0A08" }}
      aria-label="О SENZA"
    >
      {/* Copper glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(196,149,106,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Large editorial quote */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="font-heading font-light text-[#E8E2D8]/70 leading-[1.3] italic"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
          >
            Мы — кураторы. Отбираем ароматы, уход
            за кожей и подарки, которые раскрывают
            <em className="text-[#C4956A] not-italic font-normal"> тебя</em>.
          </p>
        </motion.div>

        {/* Animated copper line */}
        <motion.div
          className="mt-16 mx-auto"
          style={{ width: "60px", height: "1px", background: "#C4956A", transformOrigin: "center" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Sub-text */}
        <motion.p
          className="mt-10 text-center text-[#E8E2D8]/25 text-[10px] tracking-[0.6em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Астана, Казахстан
        </motion.p>
      </div>
    </section>
  );
}
