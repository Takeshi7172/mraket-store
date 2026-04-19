import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/data/products";

export const metadata: Metadata = {
  title: "Контакты — SENZA | Заказать в Астане",
  description:
    "Свяжитесь с SENZA для заказа ароматов, ухода и подарков в Астане. WhatsApp, Telegram, Instagram.",
};

interface ContactCard {
  platform: string;
  handle: string;
  description: string;
  href: string;
  cta: string;
  iconPath: string;
}

const CONTACTS: ContactCard[] = [
  {
    platform: "WhatsApp",
    handle: "+7 (7XX) XXX-XX-XX",
    description: "Быстрый заказ и консультация. Отвечаем в течение часа.",
    href: WHATSAPP_URL,
    cta: "Написать в WhatsApp",
    iconPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    platform: "Telegram",
    handle: "@senza",
    description: "Каталог, новинки и акции. Подписывайтесь.",
    href: "https://t.me/senza",
    cta: "Открыть Telegram",
    iconPath: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.776l-2.969-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.967.783z",
  },
  {
    platform: "Instagram",
    handle: "@senza",
    description: "Фото продуктов, обзоры и история заказов.",
    href: "https://instagram.com/senza",
    cta: "Перейти в Instagram",
    iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    platform: "Threads",
    handle: "@senza",
    description: "Честные отзывы, сравнения и лайфстайл.",
    href: "https://threads.net/@senza",
    cta: "Перейти в Threads",
    iconPath: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717h.007z",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF5ED] pt-20">
      {/* Header */}
      <div
        className="relative pt-16 pb-24 overflow-hidden grain-overlay"
        style={{ background: "#0B0A08" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 60%, rgba(196,149,106,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase mb-4">
            Связаться с нами
          </p>
          <h1
            className="font-heading font-light text-[#E8E2D8] leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            Контакты
          </h1>
          <p className="text-[#E8E2D8]/35 text-base max-w-md leading-relaxed">
            Мы в WhatsApp — отвечаем быстро и помогаем с выбором
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 divider-copper" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
        {/* Steps */}
        <div className="mb-24">
          <div className="space-y-3 mb-14">
            <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">Как сделать заказ</p>
            <h2
              className="font-heading font-light text-[#1A1814]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Три шага
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute top-7 left-8 right-8 h-px hidden sm:block"
              style={{
                background: "linear-gradient(to right, #C4956A, rgba(196,149,106,0.2), #C4956A)",
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Выберите", desc: "Найдите нужное в каталоге" },
                { num: "02", title: "Напишите", desc: "Сообщите название в WhatsApp" },
                { num: "03", title: "Оплатите", desc: "Kaspi QR — удобно и быстро" },
              ].map((s, i) => (
                <div key={s.num} className="flex flex-col items-start sm:items-center sm:text-center gap-4">
                  <div
                    className="relative z-10 w-14 h-14 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: i === 1 ? "#C4956A" : "#0B0A08",
                      border: "1px solid rgba(196,149,106,0.2)",
                    }}
                  >
                    <span
                      className="font-heading text-lg"
                      style={{ color: i === 1 ? "#0B0A08" : "#C4956A" }}
                    >
                      {s.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-light text-[#1A1814] mb-1">{s.title}</h3>
                    <p className="text-[#1A1814]/40 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {CONTACTS.map((c) => (
            <a
              key={c.platform}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 space-y-5 card-lift"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(26,24,20,0.05)",
              }}
            >
              <div className="flex items-center gap-4">
                <div className="text-[#1A1814]/30 group-hover:text-[#C4956A] transition-colors duration-200">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                    <path d={c.iconPath} />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-[#C4956A]">{c.platform}</p>
                  <p className="text-sm text-[#1A1814]/70">{c.handle}</p>
                </div>
              </div>
              <p className="text-[#1A1814]/45 text-sm leading-relaxed">{c.description}</p>
              <span className="inline-flex items-center gap-2 text-[10px] text-[#1A1814]/25 group-hover:text-[#C4956A] transition-colors tracking-[0.2em] uppercase">
                {c.cta}
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </a>
          ))}
        </div>

        {/* Location + payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className="p-8 space-y-5"
            style={{ background: "#0B0A08", border: "1px solid rgba(196,149,106,0.08)" }}
          >
            <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">Местоположение</p>
            <div className="space-y-1">
              <p className="font-heading text-3xl font-light text-[#E8E2D8]">Астана</p>
              <p className="text-[#E8E2D8]/25 text-sm">Казахстан</p>
            </div>
            <div className="w-10 h-px bg-[#C4956A]/20" />
            <p className="text-[#E8E2D8]/35 text-sm leading-relaxed">
              Работаем по всей Астане. Самовывоз и доставка — уточняйте при заказе.
            </p>
          </div>

          <div
            className="p-8 space-y-5"
            style={{ background: "#ffffff", border: "1px solid rgba(26,24,20,0.05)" }}
          >
            <p className="text-[#C4956A] text-[9px] tracking-[0.6em] uppercase">Оплата</p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: "#F14635" }}
              >
                <span className="text-white text-[9px] font-bold tracking-tight">KASPI</span>
              </div>
              <div>
                <p className="text-sm text-[#1A1814]/70">Kaspi QR</p>
                <p className="text-[#1A1814]/35 text-[12px]">Мгновенная оплата</p>
              </div>
            </div>
            <div className="w-10 h-px bg-[#C4956A]/20" />
            <p className="text-[#1A1814]/45 text-sm leading-relaxed">
              Принимаем оплату через Kaspi QR. Никаких предоплат наличными —
              только безопасная оплата через приложение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
