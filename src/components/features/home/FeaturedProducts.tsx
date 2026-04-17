import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "@/data/products";
import { SectionReveal } from "@/components/features/home/SectionReveal";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F0]" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">
                Выбор редакции
              </p>
              <h2
                id="featured-heading"
                className="font-heading text-4xl lg:text-5xl text-[#0A0A0A] leading-tight"
              >
                Бестселлеры
              </h2>
            </div>
            <Link
              href="/catalog"
              className="text-sm tracking-widest uppercase text-[#0A0A0A]/50 hover:text-[#C9A96E] transition-colors inline-flex items-center gap-2 group"
            >
              Весь каталог
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <SectionReveal key={product.id} delay={index * 100}>
              <Link
                href={`/catalog/${product.slug}`}
                className="group block"
                aria-label={`${product.name} — ${product.price.toLocaleString("ru-KZ")}₸`}
              >
                {/* Image area */}
                <div className="relative aspect-square bg-white overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/20 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <span className="bg-[#C9A96E] text-[#0A0A0A] text-xs tracking-widest uppercase px-4 py-2">
                      Подробнее
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <p className="text-xs text-[#C9A96E] tracking-widest uppercase">
                    {product.brand}
                  </p>
                  <h3 className="font-heading text-lg text-[#0A0A0A] leading-snug group-hover:text-[#C9A96E] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm text-[#0A0A0A]/50">
                      {product.volume}
                    </span>
                    <span className="text-base font-medium text-[#0A0A0A]">
                      {product.price.toLocaleString("ru-KZ")} ₸
                    </span>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
