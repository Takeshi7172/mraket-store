"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/data/products";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О нас" },
  { href: "/contact", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solidBg = !isHome || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          solidBg
            ? "bg-[#0A0A0A] shadow-lg"
            : "bg-transparent"
        )}
        style={
          solidBg
            ? {
                borderBottom: "1px solid rgba(201,169,110,0.15)",
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 group"
              aria-label="SENZA — на главную"
            >
              <span className="font-heading text-2xl lg:text-3xl tracking-[0.35em] font-light text-[#F5F5F0] group-hover:text-[#C9A96E] transition-colors duration-300">
                SENZA
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-10"
              aria-label="Основная навигация"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link-hover text-sm tracking-widest uppercase transition-colors duration-200 pb-0.5",
                    pathname === link.href
                      ? "text-[#C9A96E]"
                      : "text-[#F5F5F0]/70 hover:text-[#C9A96E]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в WhatsApp"
                className="hidden md:flex items-center gap-2 text-[#F5F5F0]/70 hover:text-[#25D366] transition-colors duration-200"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-1 relative z-[60]"
                aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={menuOpen}
              >
                <span
                  className={cn(
                    "block w-6 h-px transition-all duration-300",
                    menuOpen ? "rotate-45 translate-y-[7px] bg-[#C9A96E]" : "bg-[#F5F5F0]"
                  )}
                />
                <span
                  className={cn(
                    "block w-6 h-px transition-all duration-300",
                    menuOpen ? "opacity-0 bg-[#C9A96E]" : "bg-[#F5F5F0]"
                  )}
                />
                <span
                  className={cn(
                    "block w-6 h-px transition-all duration-300",
                    menuOpen ? "-rotate-45 -translate-y-[7px] bg-[#C9A96E]" : "bg-[#F5F5F0]"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            {/* Subtle gold blob in background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)",
              }}
            />

            <nav
              className="relative z-10 flex flex-col items-center gap-8"
              aria-label="Мобильное меню"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "font-heading text-4xl sm:text-5xl tracking-wide transition-colors duration-200",
                      pathname === link.href
                        ? "text-[#C9A96E]"
                        : "text-[#F5F5F0]/80 hover:text-[#C9A96E]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="pt-4"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#F5F5F0]/50 hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span className="text-sm tracking-widest uppercase">WhatsApp</span>
                </a>
              </motion.div>
            </nav>

            {/* Bottom brand mark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-0 right-0 text-center"
            >
              <span className="text-[#F5F5F0]/15 text-xs tracking-[0.4em] uppercase">
                Почувствуй, это SENZA
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface WhatsAppIconProps {
  className?: string;
}

function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
