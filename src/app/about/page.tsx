import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/data/products";

export const metadata: Metadata = {
  title: "О нас — MRAKET | История бренда",
  description:
    "MRAKET — это inspired парфюмерия и корейская косметика в Астане. Узнайте нашу историю: почему мы верим, что роскошный аромат не должен стоить целую зарплату.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] pt-20">
      {/* Hero */}
      <div className="bg-[#0A0A0A] pt-12 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4">
            Наша история
          </p>
          <h1 className="font-heading text-4xl lg:text-6xl text-[#F5F5F0] leading-tight mb-6">
            Аромат — это эмоция.
            <br />
            <span className="text-[#C9A96E] italic">
              Не ценник.
            </span>
          </h1>
          <p className="text-[#F5F5F0]/60 text-lg max-w-2xl leading-relaxed">
            Мы основали MRAKET с одной идеей: люди в Астане заслуживают
            те же ощущения от аромата, что и покупатели в парижских бутиках.
            Без лишней переплаты.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 space-y-24">
        {/* Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase">
              Философия
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl text-[#0A0A0A]">
              Вдохновлены,
              <br />а не скопированы
            </h2>
            <p className="text-[#0A0A0A]/70 leading-relaxed">
              Все наши ароматы линейки AUMEKA создаются с уважением к своим
              прообразам. Мы называем их «inspired» — потому что это честно.
              Мы изучаем семейства нот, характер и настроение оригинальных
              ароматов и воссоздаём ту же эмоцию.
            </p>
            <p className="text-[#0A0A0A]/70 leading-relaxed">
              Разница только в одном: мы не платим за маркетинг мировых домов
              моды, за флаконы из хрусталя и за имя на этикетке.
              Эту разницу мы передаём вам.
            </p>
          </div>
          <div className="bg-[#0A0A0A] p-8 space-y-4">
            <p className="text-[#C9A96E] text-xs tracking-widest uppercase">
              Наш принцип
            </p>
            <blockquote className="font-heading text-2xl text-[#F5F5F0] italic leading-snug">
              &ldquo;Те же ноты.
              <br />Честная цена.&rdquo;
            </blockquote>
            <p className="text-[#F5F5F0]/50 text-sm">
              — MRAKET, Астана
            </p>
          </div>
        </section>

        {/* What we offer */}
        <section className="space-y-12">
          <div className="text-center">
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">
              Наш ассортимент
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl text-[#0A0A0A]">
              Что мы предлагаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "◈",
                title: "Парфюмерия AUMEKA",
                desc: "8+ ароматов по 60–65 мл. Флаконы из тёмного стекла, стойкость на весь день. Вдохновлены лучшим — от MFK до Tom Ford.",
                price: "от 1 000 ₸",
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
                price: "от 1 500 ₸",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-[#0A0A0A]/10 p-8 space-y-3 hover:border-[#C9A96E]/40 transition-colors"
              >
                <span className="text-[#C9A96E] text-xl">{item.icon}</span>
                <h3 className="font-heading text-xl text-[#0A0A0A]">
                  {item.title}
                </h3>
                <p className="text-[#0A0A0A]/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-[#C9A96E] text-sm font-medium">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Promise */}
        <section className="bg-[#0A0A0A] p-12 space-y-6">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase">
            Наше обещание
          </p>
          <h2 className="font-heading text-3xl text-[#F5F5F0]">
            Честность — прежде всего
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#F5F5F0]/60 text-sm leading-relaxed">
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
          <div className="pt-4">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0A0A0A] px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-[#e0c080] transition-colors"
            >
              Смотреть каталог
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <h2 className="font-heading text-3xl lg:text-4xl text-[#0A0A0A]">
            Есть вопросы?
          </h2>
          <p className="text-[#0A0A0A]/60 max-w-md mx-auto">
            Напишите нам в WhatsApp — ответим быстро, поможем выбрать и
            оформим заказ.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0A0A0A] text-[#F5F5F0] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-colors"
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
