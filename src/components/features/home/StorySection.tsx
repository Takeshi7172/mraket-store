"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function StorySection() {
  return (
    <section
      className="py-24 lg:py-36"
      style={{ background: "#0E0E0E" }}
      aria-label="Наш подход"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative order-1 lg:order-2 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/products/photo_10.jpg"
                alt="SENZA аромат"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                style={{ filter: "sepia(15%) contrast(1.05) brightness(0.9)" }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(201,169,110,0.12) 0%, transparent 40%, rgba(14,14,14,0.5) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-[#C9A96E] text-[9px] tracking-[0.6em] uppercase">
              Наш подход
            </p>

            <h2
              className="font-heading text-[#F5F5F0] leading-tight"
              style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)" }}
            >
              Каждый аромат —<br />
              <em className="text-[#C9A96E]">это состояние</em>
            </h2>

            <p className="text-[#F5F5F0]/55 text-base leading-relaxed max-w-md">
              Тёплый восточный на вечер. Свежий цитрусовый на каждый день.
              Мы знаем ноты и поможем найти именно твой.
            </p>

            <div className="w-10 h-px" style={{ background: "rgba(201,169,110,0.4)" }} />

            <blockquote className="relative pl-5">
              <div
                className="absolute left-0 top-0 w-px h-full"
                style={{ background: "rgba(201,169,110,0.3)" }}
              />
              <p className="font-heading text-lg text-[#F5F5F0]/65 italic leading-snug">
                «Аромат — это то, как ты себя чувствуешь.»
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
