"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/features/home/SectionReveal";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "8+", label: "ароматов в коллекции" },
  { value: "4 500 ₸", label: "цена за 60 мл" },
  { value: "от 5 000 ₸", label: "бесплатная доставка" },
  { value: "Kaspi QR", label: "удобная оплата" },
];

export function BrandStatement() {
  return (
    <section
      className="py-28 lg:py-40 relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
      aria-labelledby="brand-statement-heading"
    >
      {/* Subtle gold bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 60%, rgba(201,169,110,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 30%, rgba(232,196,196,0.05) 0%, transparent 55%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top gold line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <SectionReveal direction="left">
            <div className="space-y-8">
              <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
                Почему SENSO
              </p>
              <h2
                id="brand-statement-heading"
                className="font-heading text-5xl lg:text-6xl text-[#F5F5F0] leading-tight"
              >
                Твои чувства.
                <br />
                <span className="text-[#C9A96E] italic">Твой аромат.</span>
              </h2>
              <p className="text-[#F5F5F0]/55 text-lg leading-relaxed max-w-md">
                Мы не копируем — мы вдохновляемся. Наши ароматы AUMEKA создаются
                из тех же семейств нот, что и их роскошные прообразы.
                Разница только в цене.
              </p>
              <p className="text-[#F5F5F0]/50 leading-relaxed max-w-md">
                Флакон 60 мл за <span className="text-[#C9A96E]">4 500 ₸</span> вместо
                20 000–80 000 ₸ за оригинал. Те же эмоции — без переплаты за бренд.
              </p>

              {/* Gold divider */}
              <div className="w-12 h-px bg-[#C9A96E]/40" />

              <div>
                <p className="text-[#F5F5F0]/35 text-sm italic">
                  «Аромат — это эмоция. Её не должна стоить целая зарплата.»
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Stats grid with glassmorphism */}
          <SectionReveal direction="right" delay={200}>
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className="p-6 space-y-3 hover:border-[#C9A96E]/30 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p className="font-heading text-2xl lg:text-3xl text-[#C9A96E]">
                    {stat.value}
                  </p>
                  <p className="text-[#F5F5F0]/45 text-sm leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Bottom gold line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mt-20" />
      </div>
    </section>
  );
}
