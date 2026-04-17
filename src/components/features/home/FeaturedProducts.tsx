"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProducts } from "@/data/products";
import { SectionReveal } from "@/components/features/home/SectionReveal";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-28 lg:py-40 bg-[#F5F5F0]" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="space-y-3">
              <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
                Выбор редакции
              </p>
              <h2
                id="featured-heading"
                className="font-heading text-5xl lg:text-6xl text-[#0A0A0A] leading-tight"
              >
                Бестселлеры
              </h2>
              <p className="text-[#0A0A0A]/45 text-sm max-w-xs leading-relaxed">
                Ароматы, которые покупают снова и снова
              </p>
            </div>
            <Link
              href="/catalog"
              className="text-sm tracking-widest uppercase text-[#0A0A0A]/40 hover:text-[#C9A96E] transition-colors inline-flex items-center gap-2 group"
            >
              Весь каталог
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </SectionReveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
            >
              <Link
                href={`/catalog/${product.slug}`}
                className="group block"
                aria-label={`${product.name} — ${product.price.toLocaleString("ru-KZ")}₸`}
              >
                {/* Image area */}
                <div className="relative aspect-[3/4] bg-white overflow-hidden mb-5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* 2+1 badge */}
                  {product.category === "perfume" && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-[#C9A96E] text-[#0A0A0A] text-[9px] tracking-widest font-semibold uppercase px-2.5 py-1">
                        2+1
                      </span>
                    </div>
                  )}

                  {/* Hover overlay — slides up from bottom */}
                  <div className="absolute inset-0 flex items-end overflow-hidden">
                    <div
                      className="w-full translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out pb-6 pt-10"
                      style={{
                        background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
                      }}
                    >
                      <div className="px-4 space-y-1">
                        <p className="text-[#C9A96E] text-[10px] tracking-widest uppercase">
                          {product.brand}
                        </p>
                        <p className="text-[#F5F5F0] font-heading text-base leading-snug">
                          {product.name}
                        </p>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[#F5F5F0]/60 text-xs">{product.volume}</span>
                          <span className="text-[#C9A96E] text-sm font-medium">
                            {product.price.toLocaleString("ru-KZ")} ₸
                          </span>
                        </div>
                        <span className="inline-block mt-2 text-[10px] tracking-widest uppercase text-[#F5F5F0]/60 border-b border-[#F5F5F0]/20 pb-0.5">
                          Подробнее →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info — below card */}
                <div className="space-y-1.5">
                  <p className="text-[10px] text-[#C9A96E] tracking-[0.3em] uppercase">
                    {product.brand}
                  </p>
                  <h3 className="font-heading text-lg text-[#0A0A0A] leading-snug group-hover:text-[#C9A96E] transition-colors duration-200">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-[#0A0A0A]/40">{product.volume}</span>
                    <span className="text-sm font-medium text-[#0A0A0A]">
                      {product.price.toLocaleString("ru-KZ")} ₸
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <SectionReveal delay={400}>
          <div className="text-center mt-16">
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#C9A96E] transition-colors duration-200 border-b border-[#0A0A0A]/15 hover:border-[#C9A96E]/40 pb-1"
            >
              Смотреть всю коллекцию
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
