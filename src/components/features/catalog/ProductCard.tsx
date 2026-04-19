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
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/catalog/${product.slug}`}
        className="group block"
        aria-label={`${product.name} — ${product.price.toLocaleString("ru-KZ")}₸`}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden mb-5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover photo-warm transition-transform duration-700 group-hover:scale-105 product-image-blend"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Category tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#0B0A08]/60 backdrop-blur-sm text-[#E8E2D8] text-[8px] tracking-[0.2em] uppercase px-3 py-1.5">
              {CATEGORY_LABELS[product.category]}
            </span>
          </div>

          {/* 1+1 badge */}
          {product.category === "perfume" && (
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-[#C4956A] text-[#0B0A08] text-[8px] tracking-[0.2em] font-semibold uppercase px-3 py-1.5">
                1+1
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#0B0A08]/0 group-hover:bg-[#0B0A08]/25 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span className="text-[#E8E2D8] text-[9px] tracking-[0.4em] uppercase border border-[#E8E2D8]/25 px-5 py-2 backdrop-blur-sm">
              Подробнее
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1.5">
          <p className="text-[9px] text-[#C4956A] tracking-[0.4em] uppercase">
            {product.brand}
          </p>
          <h3 className="font-heading text-lg font-light text-[#1A1814] group-hover:text-[#C4956A] transition-colors duration-200">
            {product.name}
          </h3>
          {product.inspiration && (
            <p className="text-[11px] text-[#1A1814]/30 italic">
              вдохновлён {product.inspiration}
            </p>
          )}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-[#1A1814]/30">{product.volume}</span>
            <span className="text-sm text-[#1A1814]/70">
              {product.price.toLocaleString("ru-KZ")} ₸
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
