import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getRelatedProducts, getWhatsAppOrderUrl, FREE_DELIVERY_TEXT, PROMO_2_PLUS_1 } from "@/data/products";
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
        <nav aria-label="Хлебные крошки" className="flex items-center gap-2 text-xs text-[#0A0A0A]/40">
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
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-square bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Brand + category */}
            <div className="space-y-2">
              <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase">
                {product.brand}
              </p>
              <h1 className="font-heading text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
                {product.name}
              </h1>
              {product.inspiration && (
                <p className="text-[#0A0A0A]/40 text-sm italic">
                  вдохновлён {product.inspiration}
                </p>
              )}
            </div>

            {/* Price + volume */}
            <div className="flex items-baseline gap-4 border-b border-[#0A0A0A]/10 pb-6">
              <span className="font-heading text-3xl text-[#0A0A0A]">
                {product.price.toLocaleString("ru-KZ")} ₸
              </span>
              <span className="text-[#0A0A0A]/40 text-sm">{product.volume}</span>
              {product.category === "perfume" && (
                <span className="ml-auto bg-[#C9A96E] text-[#0A0A0A] text-[10px] tracking-widest font-semibold uppercase px-2.5 py-1">
                  Акция 2+1
                </span>
              )}
            </div>

            {/* Promo info — perfumes only */}
            {product.category === "perfume" && (
              <div className="flex items-start gap-3 border border-[#C9A96E]/20 p-4 text-sm" style={{ backgroundColor: "rgba(201,169,110,0.06)" }}>
                <span className="text-[#C9A96E] mt-0.5 flex-shrink-0" aria-hidden="true">◆</span>
                <p className="text-[#0A0A0A]/70 leading-snug">
                  <span className="text-[#0A0A0A] font-medium">Акция:</span>{" "}
                  {PROMO_2_PLUS_1}
                </p>
              </div>
            )}

            {/* Description */}
            <p className="text-[#0A0A0A]/70 leading-relaxed">{product.description}</p>

            {/* Notes pyramid */}
            {product.notes && (
              <div className="border-t border-[#0A0A0A]/10 pt-6">
                <NotePyramid notes={product.notes} />
              </div>
            )}

            {/* Order CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#F5F5F0] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Заказать в WhatsApp
              </a>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 border border-[#0A0A0A]/20 text-[#0A0A0A] px-8 py-4 text-sm tracking-widest uppercase hover:border-[#0A0A0A] transition-colors duration-300"
              >
                ← Каталог
              </Link>
            </div>

            {/* Delivery note */}
            <div className="flex flex-col gap-2 border-t border-[#0A0A0A]/10 pt-6">
              <div className="flex items-center gap-3 text-sm text-[#0A0A0A]/40">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <span>{FREE_DELIVERY_TEXT} · Оплата Kaspi QR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-[#0A0A0A]/10 py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-3xl text-[#0A0A0A] mb-12">
              Вам также понравится
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
