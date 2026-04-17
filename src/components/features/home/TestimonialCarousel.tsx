"use client";

import { useEffect, useRef, useState } from "react";
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
    text: "Заказала Lost Cherry — теперь постоянно получаю комплименты. Не верила, что за 1000₸ можно получить такой аромат. Буду брать снова.",
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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
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
    setActive(index);
    startAuto();
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F0]" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">
              Отзывы покупателей
            </p>
            <h2
              id="testimonials-heading"
              className="font-heading text-4xl lg:text-5xl text-[#0A0A0A]"
            >
              Говорят клиенты
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="relative min-h-[200px]">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateY(0)" : "translateY(16px)",
                  pointerEvents: i === active ? "auto" : "none",
                }}
                aria-hidden={i !== active}
              >
                <div className="text-center space-y-6">
                  {/* Stars */}
                  <div className="flex justify-center gap-1" aria-label={`${t.rating} из 5 звёзд`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
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
                  <blockquote className="font-heading text-xl lg:text-2xl text-[#0A0A0A] italic leading-relaxed max-w-2xl mx-auto">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="space-y-1">
                    <p className="text-[#0A0A0A] font-medium text-sm">
                      {t.author}
                    </p>
                    <p className="text-[#0A0A0A]/40 text-xs tracking-widest uppercase">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12" role="tablist" aria-label="Переключить отзыв">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Отзыв ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-[#C9A96E] w-6"
                    : "bg-[#0A0A0A]/20 hover:bg-[#0A0A0A]/40"
                }`}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
