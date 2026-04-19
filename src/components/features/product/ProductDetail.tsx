"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import {
  getRelatedProducts,
  getWhatsAppOrderUrl,
  FREE_DELIVERY_TEXT,
  PROMO_2_PLUS_1,
} from "@/data/products";
import { NotePyramid } from "@/components/features/product/NotePyramid";
import { ProductCard } from "@/components/features/catalog/ProductCard";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const related = getRelatedProducts(product, 3);
  const orderUrl = getWhatsAppOrderUrl(product.name, product.price);

  return (
    <div className="min-h-screen bg-[#FAF5ED] pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
        <nav
          aria-label="Хлебные крошки"
          className="flex items-center gap-2 text-[11px] text-[#1A1814]/30"
        >
          <Link href="/" className="hover:text-[#C4956A] transition-colors">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-[#C4956A] transition-colors">Каталог</Link>
          <span>/</span>
          <span className="text-[#1A1814]/60">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover product-image-blend"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.category === "perfume" && (
                <div className="absolute top-5 right-5">
                  <span className="bg-[#C4956A] text-[#0B0A08] text-[10px] tracking-[0.2em] font-semibold uppercase px-4 py-2">
                    Акция 1+1
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-col space-y-8 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              <p className="text-[9px] text-[#C4956A] tracking-[0.5em] uppercase">
                {product.brand}
              </p>
              <h1
                className="font-heading font-light text-[#1A1814] leading-tight"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                {product.name}
              </h1>
            </div>

            <div className="w-12 h-px bg-[#C4956A]/30" />

            {/* Price */}
            <div className="flex items-baseline gap-5">
              <span className="font-heading text-4xl font-light text-[#1A1814]">
                {product.price.toLocaleString("ru-KZ")} ₸
              </span>
              <span className="text-[#1A1814]/30 text-sm">{product.volume}</span>
            </div>

            {/* Promo */}
            {product.category === "perfume" && (
              <div
                className="flex items-start gap-3 p-5 text-sm"
                style={{
                  background: "rgba(196,149,106,0.05)",
                  border: "1px solid rgba(196,149,106,0.15)",
                }}
              >
                <span className="text-[#C4956A] mt-0.5 flex-shrink-0 text-[10px]">&#9670;</span>
                <p className="text-[#1A1814]/55 leading-snug">
                  <span className="text-[#1A1814]/80 font-medium">Акция:</span>{" "}
                  {PROMO_2_PLUS_1}
                </p>
              </div>
            )}

            <p className="text-[#1A1814]/55 leading-[1.8] text-[15px]">
              {product.description}
            </p>

            {/* Notes */}
            {product.notes && (
              <div style={{ borderTop: "1px solid rgba(26,24,20,0.06)", paddingTop: "2rem" }}>
                <NotePyramid notes={product.notes} />
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C4956A] text-[#0B0A08] px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#D4A87E] transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Заказать в WhatsApp
              </a>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 border text-[#1A1814]/50 px-8 py-4 text-[11px] tracking-[0.25em] uppercase hover:border-[#1A1814]/30 hover:text-[#1A1814] transition-colors duration-300"
                style={{ borderColor: "rgba(26,24,20,0.1)" }}
              >
                &larr; Каталог
              </Link>
            </div>

            {/* Delivery */}
            <div className="flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid rgba(26,24,20,0.06)" }}>
              <div className="flex items-center gap-3 text-[12px] text-[#1A1814]/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0 text-[#C4956A]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <span>{FREE_DELIVERY_TEXT}</span>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-[#1A1814]/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0 text-[#C4956A]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                <span>Оплата Kaspi QR — мгновенно и безопасно</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section
          className="py-24"
          style={{ borderTop: "1px solid rgba(26,24,20,0.06)", background: "#F3EDE3" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-end justify-between mb-16">
              <div className="space-y-3">
                <p className="text-[9px] text-[#C4956A] tracking-[0.5em] uppercase">Смотрите также</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#1A1814]">
                  Вам также понравится
                </h2>
              </div>
              <Link
                href="/catalog"
                className="hidden sm:inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#1A1814]/30 hover:text-[#C4956A] transition-colors group"
              >
                Весь каталог
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-14">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
