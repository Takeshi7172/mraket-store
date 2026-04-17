"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/features/home/SectionReveal";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Заказала Lost Cherry — теперь постоянно получаю комплименты. Не верила, что за 4500₸ можно получить такой аромат. Буду брать снова.",
    author: "Айгерим Б.",
    location: "Астана",
    rating: 5,
  },
  {
    id: 2,
    text: "Брал Tobacco Vanille как тест перед оригиналом. Итог: оригинал так и не купил. Качество отличное, держится весь день.",
    author: "Данияр Е.",
    location: "Астана",
    rating: 5,
  },
  {
    id: 3,
    text: "K-beauty крем — настоящая находка. Кожа стала мягче через неделю. Ещё взяла набор Gift в подарок подруге, она тоже довольна.",
    author: "Малика С.",
    location: "Астана",
    rating: 5,
  },
  {
    id: 4,
    text: "Barakkat Rouge — моя любовь. Сладкий, тёплый, стойкий. Стоит как обед, пахнет как люкс. Всем советую.",
    author: "Жанна Т.",
    location: "Астана",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
   
  }, []);

  const goTo = (index: number) => {
    stopAuto();
    setDirection(index > active ? 1 : -1);
    setActive(index);
    startAuto();
  };

  return (
    <section
      className="py-28 lg:py-40 bg-[#F5F5F0] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Large decorative quote marks */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 font-heading text-[200px] lg:text-[280px] leading-none text-[#C9A96E] pointer-events-none select-none"
        style={{ opacity: 0.055, lineHeight: 1 }}
        aria-hidden="true"
      >
        "
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-4">
              Отзывы покупателей
            </p>
            <h2
              id="testimonials-heading"
              className="font-heading text-5xl lg:text-6xl text-[#0A0A0A]"
            >
              Говорят клиенты
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center space-y-8"
              >
                {/* Stars */}
                <div
                  className="flex justify-center gap-1.5"
                  aria-label={`${TESTIMONIALS[active].rating} из 5 звёзд`}
                >
                  {Array.from({ length: TESTIMONIALS[active].rating }).map((_, j) => (
                    <svg
                      key={j}
                      viewBox="0 0 20 20"
                      fill="#C9A96E"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-heading text-2xl lg:text-3xl text-[#0A0A0A] italic leading-relaxed max-w-3xl mx-auto">
                  &ldquo;{TESTIMONIALS[active].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="space-y-1">
                  <div className="w-8 h-px bg-[#C9A96E] mx-auto mb-4" />
                  <p className="text-[#0A0A0A] font-medium text-sm tracking-wide">
                    {TESTIMONIALS[active].author}
                  </p>
                  <p className="text-[#0A0A0A]/35 text-xs tracking-[0.3em] uppercase">
                    {TESTIMONIALS[active].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div
            className="flex justify-center gap-3 mt-14"
            role="tablist"
            aria-label="Переключить отзыв"
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Отзыв ${i + 1}`}
                className="relative h-1.5 transition-all duration-300 overflow-hidden"
                style={{
                  width: i === active ? 28 : 8,
                  background:
                    i === active ? "#C9A96E" : "rgba(10,10,10,0.15)",
                  borderRadius: 4,
                }}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
