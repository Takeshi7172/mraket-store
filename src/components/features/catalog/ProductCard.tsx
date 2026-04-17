"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { CATEGORY_LABELS } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group block"
      aria-label={`${product.name} — ${product.price.toLocaleString("ru-KZ")}₸`}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-white overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#0A0A0A]/70 text-[#F5F5F0] text-[10px] tracking-widest uppercase px-2 py-1">
            {CATEGORY_LABELS[product.category]}
          </span>
        </div>
        {/* 2+1 promo badge — perfumes only */}
        {product.category === "perfume" && (
          <div className="absolute top-3 right-3">
            <span className="bg-[#C9A96E] text-[#0A0A0A] text-[9px] tracking-widest font-semibold uppercase px-2 py-1">
              2+1
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/25 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-[#C9A96E] text-[#0A0A0A] text-xs tracking-widest uppercase px-5 py-2.5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Подробнее
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <p className="text-[10px] text-[#C9A96E] tracking-[0.3em] uppercase">
          {product.brand}
        </p>
        <h3 className="font-heading text-base lg:text-lg text-[#0A0A0A] leading-snug group-hover:text-[#C9A96E] transition-colors duration-200">
          {product.name}
        </h3>
        {product.inspiration && (
          <p className="text-xs text-[#0A0A0A]/40 italic">
            вдохновлён {product.inspiration}
          </p>
        )}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-[#0A0A0A]/40">{product.volume}</span>
          <span className="text-sm font-medium text-[#0A0A0A]">
            {product.price.toLocaleString("ru-KZ")} ₸
          </span>
        </div>
      </div>
    </Link>
  );
}
