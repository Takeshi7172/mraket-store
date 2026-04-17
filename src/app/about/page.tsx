import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/data/products";

export const metadata: Metadata = {
  title: "О нас — SENSO | История бренда",
  description:
    "SENSO — это inspired парфюмерия и корейская косметика в Астане. Узнайте нашу историю: почему мы верим, что роскошный аромат не должен стоить целую зарплату.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] pt-20">
      {/* Hero — dark, dramatic */}
      <div
        className="relative overflow-hidden pt-20 pb-32"
        style={{ background: "#0A0A0A" }}
      >
        {/* Bloom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(201,169,110,0.10) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 40% 50% at 10% 80%, rgba(232,196,196,0.07) 0%, transparent 55%)",
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-6">
            Наша история
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl xl:text-8xl text-[#F5F5F0] leading-tight mb-8">
            Аромат — это эмоция.
            <br />
            <span className="text-[#C9A96E] italic">Не ценник.</span>
          </h1>
          <p className="text-[#F5F5F0]/50 text-xl max-w-2xl leading-relaxed">
            Мы основали SENSO с одной идеей: люди в Астане заслуживают
            те же ощущения от аромата, что и покупатели в парижских бутиках.
            Без лишней переплаты.
          </p>
        </div>

        {/* Bottom gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      </div>

      {/* Philosophy — alternating layout */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28 lg:mb-40">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
              Философия
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#0A0A0A] leading-tight">
              Вдохновлены,
              <br />а не скопированы
            </h2>
            <div className="w-10 h-px bg-[#C9A96E]" />
            <p className="text-[#0A0A0A]/65 leading-relaxed text-base">
              Все наши ароматы линейки AUMEKA создаются с уважением к своим
              прообразам. Мы называем их «inspired» — потому что это честно.
              Мы изучаем семейства нот, характер и настроение оригинальных
              ароматов и воссоздаём ту же эмоцию.
            </p>
            <p className="text-[#0A0A0A]/65 leading-relaxed text-base">
              Разница только в одном: мы не платим за маркетинг мировых домов
              моды, за флаконы из хрусталя и за имя на этикетке.
              Эту разницу мы передаём вам.
            </p>
          </div>

          {/* Quote card */}
          <div
            className="p-10 lg:p-12 space-y-5"
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(201,169,110,0.15)",
            }}
          >
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
              Наш принцип
            </p>
            <blockquote className="font-heading text-3xl text-[#F5F5F0] italic leading-snug">
              &ldquo;Те же ноты.
              <br />Честная цена.&rdquo;
            </blockquote>
            <div className="w-8 h-px bg-[#C9A96E]/40" />
            <p className="text-[#F5F5F0]/40 text-sm">
              — SENSO, Астана
            </p>
          </div>
        </section>

        {/* Full-width philosophy quote */}
        <section
          className="relative py-20 px-10 lg:px-20 mb-28 lg:mb-40 text-center overflow-hidden"
          style={{ background: "#0A0A0A" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-8">
              Наша миссия
            </p>
            <p className="font-heading text-3xl lg:text-5xl text-[#C9A96E] leading-tight max-w-3xl mx-auto italic">
              «Роскошный аромат не должен стоить целую зарплату»
            </p>
          </div>
        </section>

        {/* Assortment cards */}
        <section className="space-y-14 mb-28 lg:mb-40">
          <div className="space-y-3">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
              Наш ассортимент
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#0A0A0A]">
              Что мы предлагаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "◈",
                title: "Парфюмерия AUMEKA",
                desc: "8+ ароматов по 60–65 мл. Флаконы из тёмного стекла, стойкость на весь день. Вдохновлены лучшим — от MFK до Tom Ford.",
                price: "от 4 500 ₸",
              },
              {
                icon: "◇",
                title: "K-beauty косметика",
                desc: "Корейская косметика с доказанным результатом. 4-in-1 ампула, осветляющие кремы, уход за губами.",
                price: "от 800 ₸",
              },
              {
                icon: "◈",
                title: "Наборы в подарок",
                desc: "Готовые наборы «First Date» и «Gift» — для первого знакомства с коллекцией или как подарок близкому человеку.",
                price: "от 5 500 ₸",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 space-y-4 group hover:-translate-y-1 transition-transform duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(10,10,10,0.08)",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                }}
              >
                <span className="text-[#C9A96E] text-xl">{item.icon}</span>
                <h3 className="font-heading text-xl text-[#0A0A0A]">{item.title}</h3>
                <p className="text-[#0A0A0A]/55 text-sm leading-relaxed">{item.desc}</p>
                <p className="text-[#C9A96E] text-sm font-medium">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Promise section */}
        <section
          className="p-12 lg:p-16 space-y-8"
          style={{
            background: "#0A0A0A",
            border: "1px solid rgba(201,169,110,0.12)",
          }}
        >
          <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
            Наше обещание
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl text-[#F5F5F0]">
            Честность — прежде всего
          </h2>
          <div className="w-10 h-px bg-[#C9A96E]/40" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#F5F5F0]/50 text-sm leading-relaxed">
            <p>
              Мы никогда не называем наши продукты оригиналами или копиями
              дизайнерских брендов. Все права на оригинальные ароматы
              принадлежат их создателям.
            </p>
            <p>
              AUMEKA и другие позиции — это самостоятельные продукты,
              вдохновлённые эстетикой и нотами известных ароматов.
              Мы работаем честно и открыто.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0A0A0A] px-8 py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-[#e0c080] transition-colors group"
            >
              Смотреть каталог
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6 pt-24">
          <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase">
            Мы рядом
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl text-[#0A0A0A]">
            Есть вопросы?
          </h2>
          <p className="text-[#0A0A0A]/50 max-w-md mx-auto leading-relaxed">
            Напишите нам в WhatsApp — ответим быстро, поможем выбрать и
            оформим заказ.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0A0A0A] text-[#F5F5F0] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Написать в WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
