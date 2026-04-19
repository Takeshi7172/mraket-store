"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedGrid() {
  const featured = getFeaturedProducts();

  return (
    <section
      className="py-28 lg:py-36 px-6"
      style={{ background: "#FAF5ED" }}
      aria-label="Избранные продукты"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header — asymmetric layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-4">
              Коллекция
            </p>
            <h2
              className="font-heading font-light text-[#1A1814]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Избранное
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#1A1814]/35 hover:text-[#C4956A] transition-colors duration-300"
            >
              Весь каталог
              <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-300">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric grid: 2 large + 2 small */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {featured.map((product, i) => {
            const isLarge = i < 2;
            return (
              <motion.div
                key={product.id}
                className={isLarge ? "lg:col-span-4" : "lg:col-span-2"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/catalog/${product.slug}`}
                  className="group block"
                  aria-label={`${product.name} — ${product.price.toLocaleString("ru-KZ")} ₸`}
                >
                  {/* Image container */}
                  <div
                    className="relative overflow-hidden mb-5"
                    style={{
                      aspectRatio: isLarge ? "3/4" : "3/4",
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover photo-warm transition-transform duration-700 group-hover:scale-105"
                      sizes={
                        isLarge
                          ? "(max-width: 1024px) 50vw, 33vw"
                          : "(max-width: 1024px) 50vw, 16vw"
                      }
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#0B0A08]/0 group-hover:bg-[#0B0A08]/30 transition-colors duration-500" />

                    {/* Hover label */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <span className="text-[#E8E2D8] text-[10px] tracking-[0.4em] uppercase border border-[#E8E2D8]/30 px-6 py-2.5 backdrop-blur-sm">
                        Подробнее
                      </span>
                    </div>

                    {/* 1+1 badge */}
                    {product.category === "perfume" && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-[#C4956A] text-[#0B0A08] text-[8px] tracking-[0.2em] font-semibold uppercase px-3 py-1.5">
                          1+1
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="space-y-1.5">
                    <p className="text-[9px] text-[#C4956A] tracking-[0.4em] uppercase">
                      {product.brand}
                    </p>
                    <h3 className="font-heading text-lg lg:text-xl font-light text-[#1A1814] group-hover:text-[#C4956A] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#1A1814]/70">
                      {product.price.toLocaleString("ru-KZ")} ₸
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
