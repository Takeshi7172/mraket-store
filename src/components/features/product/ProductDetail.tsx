import Image from "next/image";
import Link from "next/link";
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
    <div className="min-h-screen bg-[#F5F5F0] pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <nav
          aria-label="Хлебные крошки"
          className="flex items-center gap-2 text-xs text-[#0A0A0A]/35"
        >
          <Link href="/" className="hover:text-[#C9A96E] transition-colors">
            Главная
          </Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-[#C9A96E] transition-colors">
            Каталог
          </Link>
          <span>/</span>
          <span className="text-[#0A0A0A]">{product.name}</span>
        </nav>
      </div>

      {/* Main section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image — sticky on desktop */}
          <div className="lg:sticky lg:top-28">
            <div
              className="relative aspect-[4/5] bg-white overflow-hidden"
              style={{
                boxShadow: "0 8px 60px rgba(0,0,0,0.10)",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Perfume promo badge */}
              {product.category === "perfume" && (
                <div className="absolute top-5 right-5">
                  <span className="bg-[#C9A96E] text-[#0A0A0A] text-xs tracking-widest font-semibold uppercase px-3 py-1.5">
                    Акция 2+1
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col space-y-8 pt-2">
            {/* Brand + category */}
            <div className="space-y-3">
              <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
                {product.brand}
              </p>
              <h1 className="font-heading text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
                {product.name}
              </h1>
              {product.inspiration && (
                <p className="text-[#0A0A0A]/35 text-sm italic">
                  вдохновлён {product.inspiration}
                </p>
              )}
            </div>

            {/* Gold divider */}
            <div className="w-10 h-px bg-[#C9A96E]" />

            {/* Price + volume */}
            <div className="flex items-baseline gap-5">
              <span className="font-heading text-4xl text-[#0A0A0A]">
                {product.price.toLocaleString("ru-KZ")} ₸
              </span>
              <span className="text-[#0A0A0A]/35 text-sm">{product.volume}</span>
            </div>

            {/* Promo info — perfumes only */}
            {product.category === "perfume" && (
              <div
                className="flex items-start gap-3 p-5 text-sm"
                style={{
                  background: "rgba(201,169,110,0.06)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                <span className="text-[#C9A96E] mt-0.5 flex-shrink-0" aria-hidden="true">
                  ◆
                </span>
                <p className="text-[#0A0A0A]/65 leading-snug">
                  <span className="text-[#0A0A0A] font-medium">Акция:</span>{" "}
                  {PROMO_2_PLUS_1}
                </p>
              </div>
            )}

            {/* Description */}
            <p className="text-[#0A0A0A]/65 leading-relaxed text-base">
              {product.description}
            </p>

            {/* Notes pyramid */}
            {product.notes && (
              <div className="border-t border-[#0A0A0A]/8 pt-8">
                <NotePyramid notes={product.notes} />
              </div>
            )}

            {/* Order CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C9A96E] text-[#0A0A0A] px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#e0c080] transition-colors duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Заказать в WhatsApp
              </a>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 border border-[#0A0A0A]/15 text-[#0A0A0A]/60 px-8 py-4 text-sm tracking-widest uppercase hover:border-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300"
              >
                ← Каталог
              </Link>
            </div>

            {/* Delivery note */}
            <div className="flex flex-col gap-3 border-t border-[#0A0A0A]/8 pt-6">
              <div className="flex items-center gap-3 text-sm text-[#0A0A0A]/35">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-4 h-4 flex-shrink-0 text-[#C9A96E]"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <span>{FREE_DELIVERY_TEXT}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#0A0A0A]/35">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-4 h-4 flex-shrink-0 text-[#C9A96E]"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                <span>Оплата Kaspi QR — мгновенно и безопасно</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section
          className="border-t border-[#0A0A0A]/8 py-24"
          style={{ background: "#ffffff" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-14">
              <div className="space-y-2">
                <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
                  Смотрите также
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl text-[#0A0A0A]">
                  Вам также понравится
                </h2>
              </div>
              <Link
                href="/catalog"
                className="hidden sm:inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#0A0A0A]/40 hover:text-[#C9A96E] transition-colors group"
              >
                Весь каталог
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
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
