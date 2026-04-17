"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { CATEGORY_LABELS } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.08,
        ease: "easeOut",
      }}
    >
      <Link
        href={`/catalog/${product.slug}`}
        className="group block"
        aria-label={`${product.name} — ${product.price.toLocaleString("ru-KZ")}₸`}
      >
        {/* Image */}
        <motion.div
          className="relative aspect-[3/4] bg-white overflow-hidden mb-5 rounded-xl"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            boxShadow: "0 4px 24px rgba(201,169,110,0.08)",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Category tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#0A0A0A]/70 text-[#F5F5F0] text-[9px] tracking-widest uppercase px-3 py-1 rounded-full">
              {CATEGORY_LABELS[product.category]}
            </span>
          </div>

          {/* 2+1 promo badge */}
          {product.category === "perfume" && (
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-[#C9A96E] text-[#0A0A0A] text-[9px] tracking-widest font-semibold uppercase px-2.5 py-1 rounded-full">
                2+1
              </span>
            </div>
          )}

          {/* Hover overlay — slides up */}
          <div className="absolute inset-0 flex items-end overflow-hidden">
            <div
              className="w-full translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out pt-10 pb-5"
              style={{
                background: "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
              }}
            >
              <div className="px-4">
                <span className="text-[10px] tracking-widest uppercase text-[#F5F5F0]/55 border-b border-[#F5F5F0]/20 pb-0.5">
                  Подробнее →
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <div className="space-y-1.5">
          <p className="text-[10px] text-[#C9A96E] tracking-[0.3em] uppercase">
            {product.brand}
          </p>
          <h3 className="font-heading text-base lg:text-lg text-[#0A0A0A] leading-snug group-hover:text-[#C9A96E] transition-colors duration-200">
            {product.name}
          </h3>
          {product.inspiration && (
            <p className="text-xs text-[#0A0A0A]/35 italic">
              вдохновлён {product.inspiration}
            </p>
          )}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-[#0A0A0A]/35">{product.volume}</span>
            <span className="text-sm font-medium text-[#0A0A0A]">
              {product.price.toLocaleString("ru-KZ")} ₸
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
