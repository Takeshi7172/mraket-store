"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Выберите",
    desc: "Найдите аромат или набор в каталоге. Или напишите — подберём под настроение.",
  },
  {
    num: "02",
    title: "Напишите",
    desc: "Сообщите название в WhatsApp. Ответим быстро, оформим заказ.",
  },
  {
    num: "03",
    title: "Получите",
    desc: "Оплата Kaspi QR. Доставка по Астане — бесплатно от 5 000 ₸.",
  },
];

export function HowToOrder() {
  return (
    <section
      className="relative py-32 lg:py-40 px-6 overflow-hidden grain-overlay"
      style={{ background: "#0B0A08" }}
      aria-label="Как заказать"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-5">
            Как заказать
          </p>
          <h2
            className="font-heading font-light text-[#E8E2D8] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Три шага до<br />
            <em className="text-[#C4956A]" style={{ fontStyle: "italic" }}>твоего аромата</em>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-8 left-8 right-8 h-px hidden lg:block"
            style={{ background: "linear-gradient(to right, rgba(196,149,106,0.25), rgba(196,149,106,0.05))" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="relative z-10 w-16 h-16 flex items-center justify-center mb-8 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(196,149,106,0.12)]"
                  style={{
                    background: i === 1 ? "#C4956A" : "#0B0A08",
                    border: "1px solid rgba(196,149,106,0.25)",
                  }}
                >
                  <span
                    className="font-heading text-xl"
                    style={{ color: i === 1 ? "#0B0A08" : "#C4956A" }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-light text-[#E8E2D8] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#E8E2D8]/35 text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
