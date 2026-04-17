"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  offset: number; // vertical parallax offset multiplier
}

const STATS: StatItem[] = [
  { value: "8+", label: "ароматов", sublabel: "в коллекции", offset: 0 },
  { value: "4 500 ₸", label: "за флакон", sublabel: "от 60 мл", offset: 40 },
  { value: "5 000 ₸", label: "бесплатная", sublabel: "доставка по Астане", offset: -20 },
  { value: "Kaspi", label: "оплата QR", sublabel: "быстро и удобно", offset: 60 },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const globalY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Large decorative number */}
      <motion.div
        style={{ y: globalY }}
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-heading text-[22rem] lg:text-[28rem] text-[#F5F5F0]/[0.015] leading-none tracking-tighter"
          style={{ lineHeight: 0.85 }}
        >
          ∞
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <p className="text-[#C9A96E] text-[9px] tracking-[0.6em] uppercase mb-16">
          Цифры
        </p>

        {/* Broken grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(201,169,110,0.08)" }}>
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: StatItem;
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function StatCard({ stat, index, scrollProgress }: StatCardProps) {
  const y = useTransform(
    scrollProgress,
    [0, 1],
    [stat.offset * 0.6, stat.offset * -0.6]
  );

  return (
    <motion.div
      style={{ y, background: "#0A0A0A" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="relative p-8 lg:p-12 flex flex-col gap-3"
    >
      {/* Corner mark */}
      <div className="absolute top-5 right-5 w-5 h-5 border-t border-r border-[#C9A96E]/20" />

      <span
        className="font-heading text-[clamp(2.5rem,6vw,5rem)] text-[#C9A96E] leading-none tracking-tight"
      >
        {stat.value}
      </span>
      <div>
        <p className="text-[#F5F5F0]/80 text-sm uppercase tracking-[0.25em] mb-0.5">{stat.label}</p>
        {stat.sublabel && (
          <p className="text-[#F5F5F0]/30 text-xs">{stat.sublabel}</p>
        )}
      </div>
    </motion.div>
  );
}
