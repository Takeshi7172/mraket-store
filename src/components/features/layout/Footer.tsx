import Link from "next/link";
import { WHATSAPP_URL, FREE_DELIVERY_TEXT } from "@/data/products";

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0B0A08" }}>
      {/* Copper line */}
      <div className="divider-copper" />

      {/* Tagline */}
      <div
        className="text-center py-14 px-6"
        style={{ borderBottom: "1px solid rgba(232,226,216,0.05)" }}
      >
        <p className="font-heading text-2xl lg:text-3xl text-[#E8E2D8]/15 italic font-light">
          &laquo;Почувствуй, это SENZA.&raquo;
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" aria-label="SENZA — на главную">
              <span className="font-heading text-[26px] tracking-[0.4em] font-light text-[#E8E2D8] hover:text-[#C4956A] transition-colors duration-300">
                SENZA
              </span>
            </Link>
            <p className="text-[#E8E2D8]/30 text-sm leading-relaxed max-w-xs">
              Ароматы и корейская косметика в Астане. Выбираем лучшее — привозим к вам.
            </p>
            <p className="text-[9px] text-[#C4956A]/60 uppercase tracking-[0.5em]">
              Астана, Казахстан
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 pt-1">
              {[
                { label: "Instagram", href: "https://instagram.com/senza", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { label: "Telegram", href: "https://t.me/senza", d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.776l-2.969-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.967.783z" },
                { label: "WhatsApp", href: WHATSAPP_URL, d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-[#E8E2D8]/20 hover:text-[#C4956A] transition-colors duration-200">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3 className="text-[#E8E2D8]/30 text-[9px] tracking-[0.5em] uppercase">Навигация</h3>
            <nav className="flex flex-col gap-3" aria-label="Навигация в подвале">
              {[
                { href: "/catalog", label: "Каталог" },
                { href: "/catalog?category=perfume", label: "Парфюмерия" },
                { href: "/catalog?category=skincare", label: "Уход за кожей" },
                { href: "/catalog?category=set", label: "Наборы" },
                { href: "/about", label: "О нас" },
                { href: "/contact", label: "Контакты" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#E8E2D8]/30 hover:text-[#C4956A] transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-[#E8E2D8]/30 text-[9px] tracking-[0.5em] uppercase">Связь</h3>
            <p className="text-[#E8E2D8]/30 text-sm leading-relaxed max-w-xs">
              Заказ и консультации — через WhatsApp. Отвечаем быстро.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#20b858] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(232,226,216,0.05)" }}
        >
          <p className="text-[10px] text-[#E8E2D8]/15">
            &copy; {new Date().getFullYear()} SENZA. Астана, Казахстан.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-[10px] text-[#E8E2D8]/15">
            <span className="text-[#C4956A]/40">{FREE_DELIVERY_TEXT}</span>
            <span className="hidden sm:inline text-[#E8E2D8]/8">&middot;</span>
            <span>Оплата Kaspi QR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
