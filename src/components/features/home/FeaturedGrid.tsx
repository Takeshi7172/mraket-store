"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedGrid() {
  const featured = getFeaturedProducts();

  return (
    <section
      className="py-20 px-6"
      style={{ background: "#FFFCF5" }}
      aria-label="Избранные продукты"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-3">
            Коллекция
          </p>
          <h2 className="font-heading text-[#1A1A1A]" style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>
            Избранное
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/catalog/${product.slug}`}
              className="group block"
              aria-label={`${product.name} — ${product.price.toLocaleString("ru-KZ")} ₸`}
            >
              {/* Image */}
              <div
                className="relative aspect-[3/4] bg-white overflow-hidden mb-4 hover:scale-[1.02] transition-transform duration-300"
                style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />

                {/* 2+1 badge */}
                {product.category === "perfume" && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[#C9A96E] text-[#1A1A1A] text-[9px] tracking-widest font-semibold uppercase px-2.5 py-1">
                      2+1
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="space-y-1">
                <p className="text-[10px] text-[#C9A96E] tracking-[0.3em] uppercase">
                  {product.brand}
                </p>
                <h3 className="font-heading text-sm lg:text-base text-[#1A1A1A] leading-snug group-hover:text-[#C9A96E] transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-[#1A1A1A]">
                  {product.price.toLocaleString("ru-KZ")} ₸
                </p>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Link to catalog */}
        <div className="mt-12">
          <Link
            href="/catalog"
            className="text-sm text-[#1A1A1A]/50 hover:text-[#C9A96E] transition-colors duration-200 tracking-widest uppercase"
          >
            Весь каталог →
          </Link>
        </div>
      </div>
    </section>
  );
}
