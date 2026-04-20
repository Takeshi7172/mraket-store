"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBERS, FREE_DELIVERY_TEXT } from "@/data/products";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FinalCTA() {
  return (
    <section
      className="py-36 lg:py-44 px-6"
      style={{ background: "#0B0A08" }}
      aria-label="Контакт"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className="font-heading font-light text-[#E8E2D8] leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
        >
          Не знаешь,<br />с чего начать?
        </h2>

        <p className="text-[#E8E2D8]/60 text-base leading-relaxed mb-12 max-w-md mx-auto">
          Напиши нам — подберём аромат или уход под твоё настроение и характер.
        </p>

        {/* 3 WhatsApp numbers */}
        <div className="flex flex-col items-center gap-3 mb-10">
          {WHATSAPP_NUMBERS.map(({ number }) => (
            <a
              key={number}
              href={`https://wa.me/${number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#E8E2D8]/75 hover:text-[#25D366] transition-colors duration-300 text-sm tracking-wide"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span>{number}</span>
            </a>
          ))}
        </div>

        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 border border-[#E8E2D8]/12 text-[#E8E2D8]/40 px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-[#C4956A]/30 hover:text-[#C4956A] transition-all duration-300"
        >
          Весь каталог
        </Link>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[10px] text-[#E8E2D8]/35 tracking-wide mt-10">
          <span>{FREE_DELIVERY_TEXT}</span>
          <span className="hidden sm:inline text-[#E8E2D8]/8">&middot;</span>
          <span>Оплата при получении</span>
          <span className="hidden sm:inline text-[#E8E2D8]/8">&middot;</span>
          <span>Астана</span>
        </div>
      </motion.div>
    </section>
  );
}
