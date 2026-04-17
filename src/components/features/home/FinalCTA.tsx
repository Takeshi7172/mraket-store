"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP_URL, FREE_DELIVERY_TEXT } from "@/data/products";

const WHATSAPP_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden flex items-center justify-center min-h-screen py-24"
      style={{ background: "#070707" }}
    >
      {/* Gold blob */}
      <motion.div
        style={{ y: blobY }}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(800px, 100vw)",
            height: "min(800px, 100vw)",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.10) 0%, rgba(232,196,196,0.04) 40%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Grain */}
      <div
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-3xl mx-auto px-6 lg:px-16 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#C9A96E] text-[9px] tracking-[0.6em] uppercase mb-10"
        >
          Контакт
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-[clamp(2.5rem,8vw,6rem)] text-[#F5F5F0] leading-tight mb-8"
        >
          Твои чувства,<br />
          <em className="text-[#C9A96E]">твой аромат</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#F5F5F0]/45 text-lg leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Не знаете, что выбрать? Напишите нам — поможем подобрать аромат
          под ваш характер и настроение.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C9A96E] text-[#0A0A0A] px-10 py-5 text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#e0c080] transition-colors duration-300"
          >
            {WHATSAPP_ICON}
            Написать в WhatsApp
          </a>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 border border-[#F5F5F0]/15 text-[#F5F5F0]/55 px-10 py-5 text-xs tracking-[0.3em] uppercase hover:border-[#C9A96E]/50 hover:text-[#C9A96E] transition-all duration-300"
          >
            Весь каталог
          </Link>
        </motion.div>

        {/* Bottom notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] text-[#F5F5F0]/25"
        >
          <span>{FREE_DELIVERY_TEXT}</span>
          <span className="hidden sm:inline text-[#F5F5F0]/10">·</span>
          <span>Оплата Kaspi QR</span>
          <span className="hidden sm:inline text-[#F5F5F0]/10">·</span>
          <span>Астана</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
