"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.4, 1], [30, 0, -20]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-28 lg:py-40"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background grid lines — editorial feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: text */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="relative order-2 lg:order-1"
          >
            {/* Section label */}
            <p className="text-[#C9A96E] text-[9px] tracking-[0.6em] uppercase mb-10">
              Наша философия
            </p>

            <h2 className="font-heading text-[clamp(2.2rem,5vw,3.5rem)] text-[#F5F5F0] leading-tight mb-8">
              Каждый аромат в коллекции —<br />
              <em className="text-[#C9A96E]">это история</em>
            </h2>

            <p className="text-[#F5F5F0]/50 text-base leading-relaxed mb-6 max-w-md">
              Мы — парфюмерные кураторы. Изучаем семейства нот, тестируем
              стойкость, подбираем ароматы, которые раскрывают характер.
              В коллекции — только то, что прошло наш отбор.
            </p>

            <p className="text-[#F5F5F0]/40 text-base leading-relaxed mb-12 max-w-md">
              Тёплый восточный на вечер. Свежий цитрусовый на каждый день.
              Цветочный для особого настроения. Мы знаем, какой аромат подойдёт именно тебе.
            </p>

            {/* Gold divider */}
            <div className="w-12 h-px bg-[#C9A96E]/50 mb-10" />

            {/* Quote */}
            <blockquote className="relative pl-6">
              <div className="absolute left-0 top-0 w-px h-full bg-[#C9A96E]/30" />
              <p className="font-heading text-xl lg:text-2xl text-[#F5F5F0]/70 italic leading-snug">
                «Аромат — это то, как ты себя чувствуешь. Мы просто помогаем найти твой.»
              </p>
            </blockquote>
          </motion.div>

          {/* Right: image with editorial treatment */}
          <div className="relative order-1 lg:order-2 overflow-hidden">
            <motion.div
              style={{ y: imageY }}
              className="relative w-full"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              {/* Aspect ratio box */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/products/photo_10.jpg"
                  alt="SENSO Barakkat Rouge 540"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  style={{ filter: "sepia(25%) contrast(1.08) brightness(0.85)" }}
                />

                {/* Duotone overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(201,169,110,0.18) 0%, transparent 45%, rgba(10,10,10,0.55) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />

                {/* Corner accent */}
                <div className="absolute top-5 right-5 w-10 h-10 border-t border-r border-[#C9A96E]/40" />
                <div className="absolute bottom-5 left-5 w-10 h-10 border-b border-l border-[#C9A96E]/40" />
              </div>

              {/* Floating label */}
              <div
                className="absolute -bottom-5 -left-5 px-6 py-4"
                style={{
                  background: "rgba(10,10,10,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                <p className="text-[#C9A96E] text-[9px] tracking-[0.5em] uppercase mb-0.5">Наш выбор</p>
                <p className="text-[#F5F5F0]/80 text-sm font-heading italic">Barakkat Rouge 540</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
