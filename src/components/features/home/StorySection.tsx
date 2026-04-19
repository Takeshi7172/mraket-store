"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative py-0 overflow-hidden grain-overlay"
      style={{ background: "#0B0A08" }}
      aria-label="Наш подход"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Image — full height, parallax */}
          <div className="relative h-[60vh] lg:h-auto overflow-hidden order-1 lg:order-2">
            <motion.div
              className="absolute inset-[-15%] w-[130%] h-[130%]"
              style={{ y: imageY }}
            >
              <Image
                src="/products/photo_10.jpg"
                alt="SENZA аромат"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover photo-noir"
              />
            </motion.div>
            {/* Gradient fade to left */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to right, rgba(11,10,8,0.7) 0%, rgba(11,10,8,0.0) 40%)",
              }}
            />
            {/* Bottom gradient on mobile */}
            <div
              className="absolute inset-0 pointer-events-none lg:hidden"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,10,8,0.9) 0%, rgba(11,10,8,0.0) 50%)",
              }}
            />
          </div>

          {/* Text */}
          <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 lg:py-32 order-2 lg:order-1">
            <motion.div
              className="space-y-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">
                Наш подход
              </p>

              <h2
                className="font-heading font-light text-[#E8E2D8] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Каждый аромат —<br />
                <em className="text-[#C4956A]" style={{ fontStyle: "italic" }}>
                  это состояние
                </em>
              </h2>

              <div className="w-12 h-px bg-[#C4956A]/40" />

              <p className="text-[#E8E2D8]/45 text-[15px] leading-[1.8]">
                Тёплый восточный на вечер. Свежий цитрусовый на каждый день.
                Мы знаем ноты и поможем найти именно твой.
              </p>

              <blockquote className="relative pl-6">
                <div
                  className="absolute left-0 top-0 w-px h-full"
                  style={{ background: "rgba(196,149,106,0.25)" }}
                />
                <p className="font-heading text-xl text-[#E8E2D8]/50 italic leading-snug">
                  &laquo;Аромат — это то, как ты себя чувствуешь.&raquo;
                </p>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
