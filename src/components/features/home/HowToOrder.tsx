"use client";

import { motion } from "framer-motion";

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`;

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Выберите аромат",
    description: "Загляни в каталог или напиши нам — расскажем про ноты и поможем выбрать под настроение.",
  },
  {
    number: "02",
    title: "Оплатите через Kaspi",
    description: "Принимаем оплату по Kaspi QR. Быстро, безопасно, без лишних шагов.",
  },
  {
    number: "03",
    title: "Получите доставку",
    description: "Доставим по Астане. При заказе от 5 000 ₸ — бесплатно.",
  },
];

export function HowToOrder() {
  return (
    <section
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        aria-hidden="true"
        style={{ backgroundImage: GRAIN_SVG }}
      />

      {/* Decorative vertical line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.08), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-2xl mb-20">
          <p className="text-[#C9A96E] text-[9px] tracking-[0.6em] uppercase mb-5">
            Как заказать
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.5vw,3.2rem)] text-[#F5F5F0] leading-tight">
            Три шага до<br />
            <em className="text-[#C9A96E]">твоего аромата</em>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div
            className="absolute top-8 left-8 right-8 h-px hidden lg:block"
            style={{ background: "linear-gradient(to right, rgba(201,169,110,0.3), rgba(201,169,110,0.1))" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Number circle */}
                <div
                  className="relative w-16 h-16 flex items-center justify-center mb-8 z-10 rounded-full transition-shadow duration-300"
                  style={{
                    background: "#0A0A0A",
                    border: "1px solid rgba(201,169,110,0.3)",
                    boxShadow: "0 0 0 rgba(201,169,110,0)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 0 20px rgba(201,169,110,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 0 0 rgba(201,169,110,0)";
                  }}
                >
                  <span className="font-heading text-[#C9A96E] text-xl leading-none">{step.number}</span>

                  {/* Hover fill */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{ background: "rgba(201,169,110,0.08)" }}
                  />
                </div>

                <h3 className="font-heading text-xl lg:text-2xl text-[#F5F5F0] mb-4 leading-tight">
                  {step.title}
                </h3>

                <p className="text-[#F5F5F0]/40 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
