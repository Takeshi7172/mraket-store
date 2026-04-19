"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  getProductsByCategory,
  getWhatsAppOrderUrl,
  PROMO_1_PLUS_1,
  WHATSAPP_NUMBERS,
  FREE_DELIVERY_TEXT,
} from "@/data/products";
import { PromoCard } from "@/components/features/catalog/PromoCard";
import { PromoBanner } from "@/components/features/catalog/PromoBanner";

type SectionKey = "all" | "perfume" | "skincare";

interface NavTab {
  key: SectionKey;
  label: string;
  anchorId: string;
}

const NAV_TABS: NavTab[] = [
  { key: "all", label: "Все", anchorId: "feed-top" },
  { key: "perfume", label: "Ароматы", anchorId: "section-perfume" },
  { key: "skincare", label: "Уход", anchorId: "section-skincare" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80; // navbar + sticky nav height
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

function formatPhone(raw: string): string {
  // raw = "87086659517" -> "+7 (708) 665-95-17"
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11) {
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
  }
  return raw;
}

export function PromoFeed() {
  const perfumes = getProductsByCategory("perfume");
  const skincares = getProductsByCategory("skincare");

  const [activeTab, setActiveTab] = useState<SectionKey>("all");
  const [isStuck, setIsStuck] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  // Observe when nav sticks
  useEffect(() => {
    const sentinel = document.getElementById("sticky-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 1 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Track which section is in view to highlight active tab
  useEffect(() => {
    const perfumeEl = document.getElementById("section-perfume");
    const skincareEl = document.getElementById("section-skincare");
    if (!perfumeEl || !skincareEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "section-perfume") setActiveTab("perfume");
            if (entry.target.id === "section-skincare") setActiveTab("skincare");
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    observer.observe(perfumeEl);
    observer.observe(skincareEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="feed-top">
      {/* Sticky sentinel — sits just above where the nav will stick */}
      <div id="sticky-sentinel" style={{ height: "1px" }} />

      {/* Sticky category nav */}
      <div
        ref={stickyRef}
        className="sticky z-30 top-[64px] lg:top-[80px]"
        style={{
          background: "#FAF5ED",
          borderBottom: isStuck
            ? "1px solid rgba(196,149,106,0.2)"
            : "1px solid rgba(196,149,106,0.08)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: isStuck ? "0 4px 24px rgba(0,0,0,0.04)" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-0" role="tablist" aria-label="Разделы каталога">
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveTab(tab.key);
                    scrollToId(tab.anchorId);
                  }}
                  className="relative py-4 px-5 text-[10px] tracking-[0.3em] uppercase transition-colors duration-200"
                  style={{
                    color: isActive ? "#C4956A" : "rgba(26,24,20,0.4)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {tab.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0"
                      style={{
                        height: "2px",
                        background: "#C4956A",
                        borderRadius: "1px",
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Section: Perfumes ─────────────────────────────── */}
      <div id="section-perfume">
        <PromoBanner
          heading="Парфюмерия AUMEKA"
          subtitle="Вдохновлённые легендарными ароматами"
          badge={PROMO_1_PLUS_1}
          priceCallout="9 900 ₸ за флакон · Два за 14 990 ₸"
        />

        <div className="py-8 lg:py-12 space-y-0">
          {perfumes.map((product, i) => (
            <div key={product.id}>
              <div className="px-4 lg:px-10 py-6 lg:py-10">
                <PromoCard product={product} index={i} showPromo />
              </div>
              {i < perfumes.length - 1 && (
                <div className="mx-6 lg:mx-10 divider-copper" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Section: Skincare ─────────────────────────────── */}
      <div id="section-skincare">
        <PromoBanner
          heading="Уход и красота"
          subtitle="Проверенная косметика мировых брендов"
        />

        <div className="py-8 lg:py-12 space-y-0">
          {skincares.map((product, i) => (
            <div key={product.id}>
              <div className="px-4 lg:px-10 py-6 lg:py-10">
                <PromoCard product={product} index={i} showPromo={false} />
              </div>
              {i < skincares.length - 1 && (
                <div className="mx-6 lg:mx-10 divider-copper" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Final CTA Section ─────────────────────────────── */}
      <div
        className="relative overflow-hidden grain-overlay"
        style={{ background: "#0B0A08" }}
      >
        {/* Copper glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(196,149,106,0.09) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute left-0 right-0 top-0"
          style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(196,149,106,0.25), transparent)" }}
        />

        <div className="relative z-10 max-w-[700px] mx-auto px-6 py-20 lg:py-28 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[9px] tracking-[0.5em] uppercase mb-4"
            style={{ color: "#C4956A" }}
          >
            Сделайте заказ
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-heading font-light leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#E8E2D8" }}
          >
            Готовы заказать?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-[13px] lg:text-[15px] leading-relaxed mb-10"
            style={{ color: "rgba(232,226,216,0.4)" }}
          >
            Напишите нам в WhatsApp — ответим быстро, поможем с выбором и оформим доставку по Астане.
          </motion.p>

          {/* WhatsApp buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            {WHATSAPP_NUMBERS.map(({ number, label }) => (
              <a
                key={number}
                href={`https://wa.me/${number}?text=${encodeURIComponent("Здравствуйте! Хочу сделать заказ. Расскажите о наличии и доставке.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Написать в ${label}: ${formatPhone(number)}`}
                className="inline-flex items-center gap-3 px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#1A1916]"
                style={{
                  border: "1px solid rgba(196,149,106,0.2)",
                  color: "#E8E2D8",
                  background: "rgba(196,149,106,0.05)",
                  minWidth: "200px",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#25D366" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {formatPhone(number)}
              </a>
            ))}
          </motion.div>

          {/* Delivery + payment */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[11px] tracking-[0.1em]"
            style={{ color: "rgba(232,226,216,0.3)" }}
          >
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#C4956A" }} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              {FREE_DELIVERY_TEXT}
            </span>
            <span className="hidden sm:block" style={{ color: "rgba(196,149,106,0.2)" }}>·</span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#C4956A" }} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              Оплата Kaspi QR
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
