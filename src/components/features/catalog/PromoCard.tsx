"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { getWhatsAppOrderUrl } from "@/data/products";

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface PromoCardProps {
  product: Product;
  index: number;
  showPromo?: boolean;
}

function NoteRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="text-[9px] tracking-[0.25em] uppercase pt-0.5 flex-shrink-0 w-12"
        style={{ color: "#C4956A" }}
      >
        {label}
      </span>
      <span className="text-[12px] text-[#1A1814]/55 leading-snug">
        {items.join(" · ")}
      </span>
    </div>
  );
}

export function PromoCard({ product, index, showPromo = false }: PromoCardProps) {
  const orderUrl = getWhatsAppOrderUrl(product.name, product.price);
  // Alternating: even index = image left, odd = image right
  const imageRight = index % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-label={product.name}
    >
      {/* Mobile layout */}
      <div className="md:hidden bg-white shadow-sm overflow-hidden">
        {/* Promo badge */}
        {showPromo && (
          <div className="flex justify-end px-5 pt-5">
            <span
              className="text-[9px] tracking-[0.25em] uppercase font-semibold px-3 py-1.5"
              style={{ background: "#C4956A", color: "#0B0A08" }}
            >
              1+1
            </span>
          </div>
        )}

        {/* Image */}
        <Link href={`/catalog/${product.slug}`} className="block">
          <div
            className="relative mx-auto"
            style={{
              height: "280px",
              background: "linear-gradient(to bottom, #F3EDE3, #FAF5ED)",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain product-image-blend photo-warm"
              sizes="100vw"
            />
          </div>
        </Link>

        {/* Text */}
        <div className="px-6 pt-6 pb-8 space-y-5">
          <div className="space-y-1.5">
            <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: "#C4956A" }}>
              {product.brand}
            </p>
            <Link href={`/catalog/${product.slug}`}>
              <h3
                className="font-heading font-light leading-tight hover:text-[#C4956A] transition-colors"
                style={{ fontSize: "clamp(1.6rem, 5vw, 2rem)", color: "#1A1814" }}
              >
                {product.name}
              </h3>
            </Link>
          </div>

          <p className="text-[13px] leading-relaxed" style={{ color: "rgba(26,24,20,0.55)" }}>
            {product.description}
          </p>

          {/* Notes pyramid — mobile */}
          {product.notes && (
            <div className="space-y-2.5 py-4" style={{ borderTop: "1px solid rgba(26,24,20,0.06)", borderBottom: "1px solid rgba(26,24,20,0.06)" }}>
              <NoteRow label="Верх" items={product.notes.top} />
              <NoteRow label="Сердце" items={product.notes.heart} />
              <NoteRow label="База" items={product.notes.base} />
            </div>
          )}

          {/* Price row */}
          <div className="flex items-baseline gap-3">
            <span
              className="font-heading font-light"
              style={{ fontSize: "1.75rem", color: "#1A1814" }}
            >
              {product.price.toLocaleString("ru-KZ")} ₸
            </span>
            <span className="text-[12px]" style={{ color: "rgba(26,24,20,0.35)" }}>
              {product.volume}
            </span>
          </div>

          {/* CTA */}
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 py-4 text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 hover:bg-[#D4A87E]"
            style={{ background: "#C4956A", color: "#0B0A08" }}
          >
            {WHATSAPP_ICON}
            Заказать в WhatsApp
          </a>
        </div>
      </div>

      {/* Desktop layout */}
      <div
        className={`hidden md:flex max-w-[1200px] mx-auto items-stretch overflow-hidden bg-white shadow-sm ${imageRight ? "flex-row-reverse" : "flex-row"}`}
      >
        {/* Image side */}
        <Link
          href={`/catalog/${product.slug}`}
          className="relative flex-1 block"
          style={{
            minHeight: "480px",
            background: "linear-gradient(135deg, #F3EDE3 0%, #FAF5ED 100%)",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain product-image-blend photo-warm transition-transform duration-700 hover:scale-105"
            sizes="50vw"
          />
          {showPromo && (
            <div className={`absolute top-6 ${imageRight ? "right-6" : "left-6"}`}>
              <span
                className="text-[9px] tracking-[0.25em] uppercase font-semibold px-4 py-2"
                style={{ background: "#C4956A", color: "#0B0A08" }}
              >
                1+1
              </span>
            </div>
          )}
        </Link>

        {/* Text side */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-14 py-12 space-y-6">
          <div className="space-y-2">
            <p className="text-[9px] tracking-[0.5em] uppercase" style={{ color: "#C4956A" }}>
              {product.brand}
            </p>
            <Link href={`/catalog/${product.slug}`}>
              <h3
                className="font-heading font-light leading-tight hover:text-[#C4956A] transition-colors duration-200"
                style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.6rem)", color: "#1A1814" }}
              >
                {product.name}
              </h3>
            </Link>
          </div>

          <div className="w-10 h-px" style={{ background: "rgba(196,149,106,0.3)" }} />

          <p className="text-[14px] leading-[1.85]" style={{ color: "rgba(26,24,20,0.55)" }}>
            {product.description}
          </p>

          {/* Notes pyramid — desktop */}
          {product.notes && (
            <div className="space-y-3 py-5" style={{ borderTop: "1px solid rgba(26,24,20,0.06)", borderBottom: "1px solid rgba(26,24,20,0.06)" }}>
              <NoteRow label="Верх" items={product.notes.top} />
              <NoteRow label="Сердце" items={product.notes.heart} />
              <NoteRow label="База" items={product.notes.base} />
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-4">
            <span
              className="font-heading font-light"
              style={{ fontSize: "2.2rem", color: "#1A1814" }}
            >
              {product.price.toLocaleString("ru-KZ")} ₸
            </span>
            <span className="text-[13px]" style={{ color: "rgba(26,24,20,0.35)" }}>
              {product.volume}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 hover:bg-[#D4A87E]"
              style={{ background: "#C4956A", color: "#0B0A08" }}
            >
              {WHATSAPP_ICON}
              Заказать в WhatsApp
            </a>
            <Link
              href={`/catalog/${product.slug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] tracking-[0.25em] uppercase transition-colors duration-300"
              style={{
                border: "1px solid rgba(26,24,20,0.1)",
                color: "rgba(26,24,20,0.45)",
              }}
            >
              Подробнее &rarr;
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
