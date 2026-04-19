import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/data/products";

export const metadata: Metadata = {
  title: "О нас — SENZA | Ароматы и косметика в Астане",
  description:
    "SENZA — ароматы и корейская косметика в Астане. Мы не производим — мы выбираем лучшее и привозим.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF5ED] pt-20">
      {/* Hero */}
      <div
        className="relative overflow-hidden pt-20 pb-32"
        style={{ background: "#0B0A08" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(196,149,106,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-6">
            Кто мы
          </p>
          <h1
            className="font-heading font-light text-[#E8E2D8] leading-tight mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Мы не производим.<br />
            <em className="text-[#C4956A]" style={{ fontStyle: "italic" }}>Мы выбираем.</em>
          </h1>
          <p className="text-[#E8E2D8]/40 text-lg max-w-2xl leading-relaxed">
            Ароматы AUMEKA, косметика KIKO Milano, Lancome, PUSY — всё через нас в Астане.
            Перепробовали сотни — оставили лучшее.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 divider-copper" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
        {/* Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 lg:mb-44">
          <div className="space-y-6">
            <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">Философия</p>
            <h2
              className="font-heading font-light text-[#1A1814] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Коллекция,<br />собранная со вкусом
            </h2>
            <div className="w-12 h-px bg-[#C4956A]/30" />
            <p className="text-[#1A1814]/50 leading-[1.8] text-[15px]">
              Каждый аромат SENZA — это выбор, который мы сделали до вас.
              Тестируем стойкость, нюхаем на коже, слушаем отзывы.
              Плохой аромат не доходит до полки.
            </p>
            <p className="text-[#1A1814]/50 leading-[1.8] text-[15px]">
              С уходом так же: берём только то, что реально работает.
              Не обещаем чудес — просто показываем результат.
            </p>
          </div>

          {/* Quote card */}
          <div
            className="p-10 lg:p-14 space-y-5"
            style={{
              background: "#0B0A08",
              border: "1px solid rgba(196,149,106,0.1)",
            }}
          >
            <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">Наш принцип</p>
            <blockquote
              className="font-heading font-light text-[#E8E2D8] italic leading-snug"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              &ldquo;Знаем ноты.<br />Подберём твой.&rdquo;
            </blockquote>
            <div className="w-10 h-px bg-[#C4956A]/25" />
            <p className="text-[#E8E2D8]/30 text-sm">— SENZA, Астана</p>
          </div>
        </section>

        {/* Mission quote */}
        <section
          className="relative py-20 px-10 lg:px-20 mb-32 lg:mb-44 text-center overflow-hidden"
          style={{ background: "#0B0A08" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(196,149,106,0.06) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-10">Наша миссия</p>
            <p
              className="font-heading font-light text-[#C4956A] leading-tight max-w-3xl mx-auto italic"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              &laquo;Знаем ноты. Поможем найти свой аромат.&raquo;
            </p>
          </div>
        </section>

        {/* Three directions */}
        <section className="space-y-14 mb-32 lg:mb-44">
          <div className="space-y-3">
            <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">Наша коллекция</p>
            <h2
              className="font-heading font-light text-[#1A1814]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Три направления
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Ароматы",
                desc: "6+ ароматов AUMEKA — восточные, цветочные, древесные. Каждый протестирован лично. Акция 1+1.",
                price: "9 900 ₸ за флакон",
              },
              {
                title: "Уход",
                desc: "Корейская косметика от KIKO Milano, Lancome, PUSY. Работает — иначе не берём.",
                price: "от 2 000 ₸",
              },
              {
                title: "Доставка",
                desc: "Заказ через WhatsApp. Отвечаем быстро. Доставка по Астане — бесплатно от 5 000 ₸.",
                price: "Бесплатно от 5 000 ₸",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 space-y-4 card-lift"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,24,20,0.06)",
                }}
              >
                <h3 className="font-heading text-xl font-light text-[#1A1814]">{item.title}</h3>
                <p className="text-[#1A1814]/45 text-sm leading-relaxed">{item.desc}</p>
                <p className="text-[#C4956A] text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section
          className="p-12 lg:p-16 space-y-8"
          style={{
            background: "#0B0A08",
            border: "1px solid rgba(196,149,106,0.08)",
          }}
        >
          <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">Наш подход</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#E8E2D8]">
            Экспертиза и открытость
          </h2>
          <div className="w-12 h-px bg-[#C4956A]/25" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#E8E2D8]/40 text-sm leading-relaxed">
            <p>
              AUMEKA — самостоятельная коллекция ароматов, не копия и не подделка.
              Мы отбираем то, что нравится нам самим. Если не понравится — не берём.
            </p>
            <p>
              Напишите нам, расскажите о себе — и мы подберём аромат или уход
              под ваш характер. Без давления, без скриптов. Просто по-человечески.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-3 bg-[#C4956A] text-[#0B0A08] px-8 py-3.5 text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#D4A87E] transition-colors"
            >
              Смотреть каталог
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6 pt-28">
          <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">Мы рядом</p>
          <h2
            className="font-heading font-light text-[#1A1814]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Есть вопросы?
          </h2>
          <p className="text-[#1A1814]/40 max-w-md mx-auto leading-relaxed">
            Напишите нам в WhatsApp — ответим быстро, поможем выбрать и оформим заказ.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0B0A08] text-[#E8E2D8] px-10 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-[#C4956A] hover:text-[#0B0A08] transition-colors duration-400"
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
