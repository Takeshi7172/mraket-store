"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  age: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Айгерим",
    age: 24,
    text: "Barakkat Rouge стал частью меня. Каждое утро — это ритуал. А комплименты? Они теперь ежедневные.",
  },
  {
    name: "Данияр",
    age: 28,
    text: "Попросил подобрать что-то под мой характер — предложили BLEU и Tobacco Vanille. Попали точно. Взял оба, третий в подарок.",
  },
  {
    name: "Мадина",
    age: 31,
    text: "Заказала набор Gift для подруги. Мне помогли выбрать аромат по описанию её характера. Угадали идеально.",
  },
  {
    name: "Асем",
    age: 22,
    text: "Крем 4-in-1 мне посоветовали в SENZA. Теперь понимаю почему — кожа как после корейского салона.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const advance = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [advance]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[current];

  return (
    <section
      className="relative py-32 lg:py-44 overflow-hidden flex items-center justify-center min-h-[65vh]"
      style={{ background: "#0B0A08" }}
      aria-label="Отзывы"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(196,149,106,0.04) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-16 w-full relative z-10">
        <div className="text-center">
          <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-20">
            Что говорят клиенты
          </p>

          {/* Large decorative quote mark */}
          <div
            className="font-heading text-[8rem] lg:text-[12rem] text-[#C4956A]/[0.06] leading-none select-none -mb-16 lg:-mb-24"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Testimonial carousel */}
          <div className="relative min-h-[12rem] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d > 0 ? 30 : -30 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d > 0 ? -30 : 30 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <blockquote className="text-center max-w-2xl mx-auto px-4">
                  <p
                    className="font-heading font-light text-[#E8E2D8]/80 italic leading-snug mb-10"
                    style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
                  >
                    &laquo;{t.text}&raquo;
                  </p>
                  <footer>
                    <p className="text-[#C4956A] text-[10px] tracking-[0.5em] uppercase">
                      {t.name}, {t.age}
                    </p>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-20">
            <button
              onClick={handlePrev}
              className="w-11 h-11 flex items-center justify-center border border-[#E8E2D8]/8 hover:border-[#C4956A]/30 text-[#E8E2D8]/25 hover:text-[#C4956A] transition-all duration-300"
              aria-label="Предыдущий отзыв"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Отзыв ${i + 1}`}
                  className="transition-all duration-400"
                  style={{
                    width: i === current ? 28 : 6,
                    height: 2,
                    background: i === current ? "#C4956A" : "rgba(232,226,216,0.15)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 flex items-center justify-center border border-[#E8E2D8]/8 hover:border-[#C4956A]/30 text-[#E8E2D8]/25 hover:text-[#C4956A] transition-all duration-300"
              aria-label="Следующий отзыв"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
