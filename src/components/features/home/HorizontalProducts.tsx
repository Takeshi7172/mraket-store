"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getFeaturedProducts } from "@/data/products";

export function HorizontalProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const featuredProducts = getFeaturedProducts();

  // Translate: from 0% to -(cards * width - viewport)
  // We'll use a -60% shift across the scroll range
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "400vh", background: "#050505" }}
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Section label */}
        <div className="px-8 lg:px-16 mb-10 relative z-10">
          <p className="text-[#C9A96E] text-[9px] tracking-[0.6em] uppercase mb-3">
            Коллекция
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl text-[#F5F5F0] leading-tight">
            Избранные<br />
            <em className="text-[#C9A96E]">ароматы</em>
          </h2>
        </div>

        {/* Horizontal track */}
        <div ref={trackRef} className="relative overflow-visible pl-8 lg:pl-16">
          <motion.div
            style={{ x }}
            className="flex gap-5 lg:gap-8 items-stretch"
          >
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/catalog/${product.slug}`}
                className="flex-shrink-0 group"
                style={{ width: "clamp(280px, 38vw, 480px)" }}
              >
                <article className="h-full flex flex-col">
                  {/* Image */}
                  <div
                    className="relative overflow-hidden mb-5"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 280px, 38vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        filter: "sepia(20%) contrast(1.1) brightness(0.82)",
                      }}
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.75) 100%)",
                      }}
                    />

                    {/* Gold overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "rgba(201,169,110,0.08)",
                      }}
                    />

                    {/* Corner accent lines */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#C9A96E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#C9A96E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Price chip on image */}
                    <div className="absolute bottom-5 left-5">
                      <span
                        className="text-[#C9A96E] text-sm font-medium tracking-wide"
                        style={{
                          textShadow: "0 1px 8px rgba(0,0,0,0.8)",
                        }}
                      >
                        {product.price.toLocaleString("ru-KZ")} ₸
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <p className="text-[#C9A96E] text-[9px] tracking-[0.5em] uppercase">
                      {product.brand}
                    </p>
                    <h3 className="font-heading text-xl lg:text-2xl text-[#F5F5F0] leading-tight">
                      {product.name}
                    </h3>
                    {product.inspiration && (
                      <p className="text-[#F5F5F0]/35 text-xs tracking-wide">
                        вдохновлён {product.inspiration}
                      </p>
                    )}

                    {/* Arrow link */}
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center gap-2 text-[#C9A96E] text-xs tracking-[0.25em] uppercase group-hover:gap-4 transition-all duration-300">
                        Подробнее
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}

            {/* End card: View all */}
            <Link
              href="/catalog"
              className="flex-shrink-0 flex items-center justify-center group"
              style={{
                width: "clamp(220px, 25vw, 360px)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
            >
              <div className="text-center px-8">
                <p className="font-heading text-2xl lg:text-3xl text-[#F5F5F0]/60 group-hover:text-[#C9A96E] transition-colors duration-300 mb-3">
                  Весь<br />каталог
                </p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-8 h-8 mx-auto text-[#C9A96E]/50 group-hover:text-[#C9A96E] transition-colors duration-300" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Progress line */}
        <div className="px-8 lg:px-16 mt-10 relative z-10">
          <div className="h-px w-full bg-[#F5F5F0]/08 relative overflow-hidden" style={{ background: "rgba(245,245,240,0.08)" }}>
            <motion.div
              style={{ width: progressWidth }}
              className="absolute top-0 left-0 h-full bg-[#C9A96E]/60"
            />
          </div>
          <p className="text-[#F5F5F0]/25 text-[10px] tracking-[0.3em] uppercase mt-3">
            Листайте ↓ чтобы смотреть
          </p>
        </div>
      </div>
    </section>
  );
}
