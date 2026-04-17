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
    text: "Крем 4-in-1 мне посоветовали в SENSO как must-have. Теперь понимаю почему — кожа как после корейского салона.",
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
    const id = setInterval(advance, 5500);
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

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
    }),
  };

  const t = TESTIMONIALS[current];

  return (
    <section
      className="relative py-28 lg:py-44 overflow-hidden flex items-center justify-center min-h-[70vh]"
      style={{ background: "#0A0A0A" }}
    >
      {/* Decorative gold blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-16 w-full relative z-10">
        <div className="text-center">
          {/* Section label */}
          <p className="text-[#C9A96E] text-[9px] tracking-[0.6em] uppercase mb-16">
            Что говорят наши
          </p>

          {/* Large decorative quote */}
          <div
            className="font-heading text-[10rem] text-[#C9A96E]/08 leading-none select-none -mb-12 lg:-mb-16"
            aria-hidden="true"
          >
            "
          </div>

          {/* Testimonial content */}
          <div className="relative min-h-[10rem] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <blockquote className="text-center max-w-2xl mx-auto px-4">
                  <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-[#F5F5F0]/85 italic leading-snug mb-8">
                    «{t.text}»
                  </p>
                  <footer>
                    <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase">
                      {t.name}, {t.age}
                    </p>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-24">
            {/* Prev */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center border border-[#F5F5F0]/10 hover:border-[#C9A96E]/40 text-[#F5F5F0]/30 hover:text-[#C9A96E] transition-all duration-300"
              aria-label="Предыдущий отзыв"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="transition-all duration-300"
                  aria-label={`Отзыв ${i + 1}`}
                  style={{
                    width: i === current ? 24 : 6,
                    height: 2,
                    background: i === current ? "#C9A96E" : "rgba(245,245,240,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center border border-[#F5F5F0]/10 hover:border-[#C9A96E]/40 text-[#F5F5F0]/30 hover:text-[#C9A96E] transition-all duration-300"
              aria-label="Следующий отзыв"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
