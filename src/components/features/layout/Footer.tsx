import Link from "next/link";
import { WHATSAPP_URL, FREE_DELIVERY_TEXT } from "@/data/products";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/senso",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/senso",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.776l-2.969-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.967.783z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://threads.net/@senso",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 1.848-.022 3.534-.501 4.787-1.335 1.326-.89 2.132-2.191 2.372-3.867H15.92c-.339 1.29-1.033 2.304-2.064 3.017-1.044.723-2.396 1.086-4.022 1.083l-.006-.001c-2.3-.014-4.055-.714-5.22-2.082-.986-1.154-1.512-2.766-1.569-4.767V11.98c.057-2.001.583-3.613 1.569-4.767 1.165-1.368 2.92-2.068 5.22-2.082l.006-.001c1.624-.003 2.977.36 4.022 1.082 1.032.714 1.726 1.728 2.065 3.017h2.079c-.24-1.676-1.046-2.977-2.372-3.867-1.253-.834-2.939-1.313-4.787-1.335-2.91.019-5.11.934-6.54 2.717-1.339 1.668-2.03 4.078-2.057 7.164.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.63 2.698 6.54 2.717h.007z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Gold accent line at top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      {/* Tagline section */}
      <div
        className="border-b text-center py-12 px-6"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <p className="font-heading text-2xl lg:text-3xl text-[#F5F5F0]/20 italic">
          «Почувствуй, это SENSO.»
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
          {/* Brand column */}
          <div className="space-y-6">
            <Link href="/" aria-label="SENSO — на главную">
              <span className="font-heading text-3xl tracking-[0.35em] font-light text-[#F5F5F0] hover:text-[#C9A96E] transition-colors duration-300">
                SENSO
              </span>
            </Link>
            <p className="text-[#F5F5F0]/40 text-sm leading-relaxed max-w-xs">
              Парфюмерные кураторы. Ароматы и K-beauty, собранные со вкусом.
            </p>
            <p className="text-[10px] text-[#C9A96E] uppercase tracking-[0.4em]">
              Астана, Казахстан
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#F5F5F0]/25 hover:text-[#C9A96E] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="space-y-5">
            <h3 className="text-[#F5F5F0]/40 text-[10px] tracking-[0.4em] uppercase">
              Навигация
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Навигация в подвале">
              {[
                { href: "/catalog", label: "Каталог" },
                { href: "/catalog?category=perfume", label: "Парфюмерия" },
                { href: "/catalog?category=skincare", label: "Уход за кожей" },
                { href: "/catalog?category=set", label: "Наборы" },
                { href: "/about", label: "О нас" },
                { href: "/contact", label: "Контакты" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#F5F5F0]/40 hover:text-[#C9A96E] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-5">
            <h3 className="text-[#F5F5F0]/40 text-[10px] tracking-[0.4em] uppercase">
              Связь
            </h3>
            <p className="text-[#F5F5F0]/40 text-sm leading-relaxed max-w-xs">
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
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-[#F5F5F0]/20">
            © {new Date().getFullYear()} SENSO. Астана, Казахстан.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-[#F5F5F0]/20">
            <span className="text-[#C9A96E]/50">{FREE_DELIVERY_TEXT}</span>
            <span className="hidden sm:inline text-[#F5F5F0]/10">·</span>
            <div className="flex items-center gap-1.5">
              <span>Оплата через</span>
              <span className="text-[#F5F5F0]/40 font-medium tracking-wide">
                Kaspi QR
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
