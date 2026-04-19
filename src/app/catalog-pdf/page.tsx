import type { Metadata } from "next";
import Image from "next/image";
import { products, type Product } from "@/data/products";

export const metadata: Metadata = {
  title: "SENZA — Каталог 2026",
  description: "Каталог SENZA: ароматы, уход и подарки. Астана.",
  robots: { index: false, follow: false },
};

// ── helpers ──────────────────────────────────────────────────────────────────

function formatPrice(price: number): string {
  return price.toLocaleString("ru-KZ") + " ₸";
}

const perfumes = products.filter((p) => p.category === "perfume");
const skincare = products.filter((p) => p.category === "skincare");

// ── sub-components ────────────────────────────────────────────────────────────

interface CopperDividerProps {
  className?: string;
}

function CopperDivider({ className = "" }: CopperDividerProps) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{
        background:
          "linear-gradient(to right, transparent, #C4956A, transparent)",
        opacity: 0.6,
      }}
    />
  );
}

interface SenzaLogoProps {
  size?: "sm" | "lg";
  color?: string;
}

function SenzaLogo({ size = "sm", color = "#E8E2D8" }: SenzaLogoProps) {
  const fontSize = size === "lg" ? "3.5rem" : "1.25rem";
  return (
    <span
      style={{
        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize,
        letterSpacing: "0.4em",
        color,
        lineHeight: 1,
      }}
    >
      SENZA
    </span>
  );
}

interface PerfumePageProps {
  product: Product;
}

function PerfumePage({ product }: PerfumePageProps) {
  const { name, inspiration, notes, price, volume, image } = product;

  return (
    <section
      className="catalog-page"
      style={{ background: "#FAF5ED" }}
      aria-label={`Продукт: ${name}`}
    >
      {/* Top logo bar */}
      <div className="flex justify-center pt-7 pb-4">
        <SenzaLogo size="sm" color="#1A1814" />
      </div>

      <CopperDivider className="mx-6" />

      {/* Product image */}
      <div
        className="relative mx-auto mt-5"
        style={{ width: "220px", height: "220px" }}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="220px"
          className="object-contain product-image-blend"
          style={{ filter: "contrast(1.05) brightness(0.96) saturate(0.88)" }}
        />
      </div>

      {/* Promo badge */}
      <div className="flex justify-center mt-3">
        <span
          className="text-[9px] tracking-[0.25em] uppercase px-3 py-1"
          style={{
            color: "#C4956A",
            border: "1px solid rgba(196,149,106,0.4)",
            background: "rgba(196,149,106,0.06)",
          }}
        >
          Акция 1+1
        </span>
      </div>

      {/* Name + inspiration */}
      <div className="px-8 mt-4 text-center">
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "1.75rem",
            color: "#1A1814",
            lineHeight: 1.15,
            letterSpacing: "0.02em",
          }}
        >
          {name}
        </h2>
        {inspiration && (
          <p
            className="mt-1.5"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.875rem",
              color: "#8A8478",
              letterSpacing: "0.01em",
            }}
          >
            вдохновлён {inspiration}
          </p>
        )}
      </div>

      <CopperDivider className="mx-6 mt-5" />

      {/* Notes pyramid */}
      {notes && (
        <div className="px-8 mt-4 space-y-1.5">
          <NoteRow label="верхние" notes={notes.top} />
          <NoteRow label="средние" notes={notes.heart} />
          <NoteRow label="базовые" notes={notes.base} />
        </div>
      )}

      {/* Price row */}
      <div className="px-8 mt-5 flex items-baseline justify-between">
        <span
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: "1.5rem",
            color: "#1A1814",
            letterSpacing: "0.01em",
          }}
        >
          {formatPrice(price)}
        </span>
        <span
          className="text-xs"
          style={{ color: "#8A8478", letterSpacing: "0.08em" }}
        >
          {volume}
        </span>
      </div>

      <CopperDivider className="mx-6 mt-5" />

      {/* CTA */}
      <div className="flex items-center justify-center gap-2 mt-4 px-8">
        <WhatsAppIcon />
        <span
          className="text-sm"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            color: "#1A1814",
            letterSpacing: "0.02em",
          }}
        >
          Заказать через WhatsApp
        </span>
        <span style={{ color: "#C4956A", fontSize: "0.75rem" }}>→</span>
      </div>
    </section>
  );
}

interface NoteRowProps {
  label: string;
  notes: string[];
}

function NoteRow({ label, notes }: NoteRowProps) {
  return (
    <div className="flex gap-2 items-baseline">
      <span
        className="text-[10px] uppercase tracking-[0.15em] shrink-0 w-16"
        style={{ color: "#C4956A" }}
      >
        {label}
      </span>
      <span
        className="text-[11px]"
        style={{
          color: "#1A1814",
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        }}
      >
        {notes.join(", ")}
      </span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill="#25D366"
      />
      <path
        d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.108 1.51 5.84L.057 23.428a.5.5 0 0 0 .515.572l5.756-1.506A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.032-1.386l-.36-.214-3.727.977.994-3.635-.236-.374A9.8 9.8 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"
        fill="#25D366"
      />
    </svg>
  );
}

interface SkincareCardProps {
  product: Product;
}

function SkincareCard({ product }: SkincareCardProps) {
  return (
    <div
      className="flex items-center gap-4 py-4"
      style={{ borderBottom: "1px solid rgba(196,149,106,0.18)" }}
    >
      <div
        className="relative shrink-0"
        style={{ width: "72px", height: "72px" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="72px"
          className="object-contain product-image-blend"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: "1.05rem",
            color: "#1A1814",
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </p>
        <p
          className="mt-0.5 text-[11px]"
          style={{ color: "#8A8478", letterSpacing: "0.04em" }}
        >
          {product.volume}
        </p>
      </div>
      <div className="shrink-0 text-right">
        <span
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: "1.1rem",
            color: "#1A1814",
          }}
        >
          {formatPrice(product.price)}
        </span>
      </div>
    </div>
  );
}

interface GiftCardProps {
  product: Product;
}

function GiftCard({ product }: GiftCardProps) {
  return (
    <div
      className="rounded-none p-5 mb-4"
      style={{
        background: "#F3EDE3",
        border: "1px solid rgba(196,149,106,0.2)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="relative shrink-0"
          style={{ width: "88px", height: "88px" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="88px"
            className="object-contain product-image-blend"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "1.15rem",
              color: "#1A1814",
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </p>
          <p
            className="mt-1 text-[11px] leading-relaxed"
            style={{ color: "#8A8478" }}
          >
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span
              style={{
                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: "1.2rem",
                color: "#C4956A",
              }}
            >
              {formatPrice(product.price)}
            </span>
            <span
              className="text-[10px]"
              style={{ color: "#8A8478", letterSpacing: "0.06em" }}
            >
              {product.volume}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── page sections ─────────────────────────────────────────────────────────────

function CoverPage() {
  return (
    <section
      className="catalog-page flex flex-col items-center justify-between"
      style={{ background: "#0B0A08" }}
      aria-label="Обложка каталога"
    >
      {/* Top spacer + decorative line */}
      <div className="flex flex-col items-center pt-16 w-full">
        <div
          className="w-12 h-px mb-12"
          style={{ background: "rgba(196,149,106,0.4)" }}
        />
      </div>

      {/* Center block */}
      <div className="flex flex-col items-center text-center px-8 flex-1 justify-center">
        <SenzaLogo size="lg" color="#E8E2D8" />

        <p
          className="mt-5 text-[10px] tracking-[0.5em] uppercase"
          style={{ color: "#C4956A" }}
        >
          Каталог 2026
        </p>

        <div
          className="w-16 h-px my-7"
          style={{ background: "rgba(196,149,106,0.35)" }}
        />

        <p
          className="text-[11px] tracking-[0.2em] uppercase"
          style={{ color: "rgba(232,226,216,0.5)" }}
        >
          Ароматы • Уход
        </p>

        {/* Promo badge */}
        <div
          className="mt-9 px-5 py-2.5"
          style={{
            border: "1px solid rgba(196,149,106,0.35)",
            background: "rgba(196,149,106,0.07)",
          }}
        >
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "#C4956A" }}
          >
            &#9670;&nbsp; Акция 1+1 на ароматы &nbsp;&#9670;
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center pb-14 w-full">
        <div
          className="w-full h-px mb-6"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(196,149,106,0.25), transparent)",
          }}
        />
        <p
          className="text-[10px] tracking-[0.35em] uppercase"
          style={{ color: "rgba(232,226,216,0.35)" }}
        >
          Астана&nbsp;|&nbsp;senza.kz
        </p>
      </div>
    </section>
  );
}

function SkincareSection() {
  return (
    <section
      className="catalog-page"
      style={{ background: "#FAF5ED" }}
      aria-label="Уход за кожей"
    >
      {/* Header band */}
      <div
        className="px-6 pt-10 pb-6"
        style={{ borderBottom: "1px solid rgba(196,149,106,0.2)" }}
      >
        <p
          className="text-[9px] tracking-[0.5em] uppercase mb-2"
          style={{ color: "#C4956A" }}
        >
          Коллекция
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "2.25rem",
            color: "#1A1814",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
          }}
        >
          Уход за кожей
        </h2>
      </div>

      {/* Products list */}
      <div className="px-6 mt-2">
        {skincare.map((product) => (
          <SkincareCard key={product.id} product={product} />
        ))}
      </div>

      {/* Info block */}
      <div
        className="mx-6 mt-6 p-4"
        style={{
          background: "rgba(196,149,106,0.05)",
          border: "1px solid rgba(196,149,106,0.18)",
        }}
      >
        <p
          className="text-[11px] leading-relaxed"
          style={{ color: "#8A8478", letterSpacing: "0.02em" }}
        >
          Вся уходовая косметика проходит куратурный отбор. Подходит для
          ежедневного ухода. Консультация по подбору — бесплатно.
        </p>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <WhatsAppIcon />
        <span
          className="text-sm"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            color: "#1A1814",
          }}
        >
          Заказать через WhatsApp
        </span>
        <span style={{ color: "#C4956A", fontSize: "0.75rem" }}>→</span>
      </div>
    </section>
  );
}

function GiftSetsSection() {
  return (
    <section
      className="catalog-page"
      style={{ background: "#FAF5ED" }}
      aria-label="Подарочные наборы"
    >
      {/* Header band */}
      <div
        className="px-6 pt-10 pb-6"
        style={{ borderBottom: "1px solid rgba(196,149,106,0.2)" }}
      >
        <p
          className="text-[9px] tracking-[0.5em] uppercase mb-2"
          style={{ color: "#C4956A" }}
        >
          Для особых случаев
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "2.25rem",
            color: "#1A1814",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
          }}
        >
          Подарочные наборы
        </h2>
      </div>

      {/* Gift cards */}
      <div className="px-6 mt-6">
        {([] as Product[]).map((product) => (
          <GiftCard key={product.id} product={product} />
        ))}
      </div>

      {/* Delivery note */}
      <div className="px-6 mt-4">
        <div className="flex items-start gap-3">
          <span style={{ color: "#C4956A", fontSize: "0.75rem", marginTop: "2px" }}>
            &#9670;
          </span>
          <p
            className="text-[11px] leading-relaxed"
            style={{ color: "#8A8478" }}
          >
            Бесплатная доставка от 5 000 ₸ по Астане. Подарочная упаковка
            включена в наборы.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <WhatsAppIcon />
        <span
          className="text-sm"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            color: "#1A1814",
          }}
        >
          Заказать через WhatsApp
        </span>
        <span style={{ color: "#C4956A", fontSize: "0.75rem" }}>→</span>
      </div>
    </section>
  );
}

function BackCoverPage() {
  return (
    <section
      className="catalog-page flex flex-col items-center justify-between"
      style={{ background: "#0B0A08" }}
      aria-label="Контакты"
    >
      {/* Top */}
      <div className="flex flex-col items-center pt-16 px-8 flex-1 justify-center w-full text-center">
        <SenzaLogo size="lg" color="#E8E2D8" />

        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: "#C4956A",
            letterSpacing: "0.04em",
          }}
        >
          Кураторы чувств
        </p>

        <div
          className="w-20 h-px my-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(196,149,106,0.5), transparent)",
          }}
        />

        {/* Contact rows */}
        <div className="w-full max-w-xs space-y-4">
          <ContactRow icon="wa" label="WhatsApp 1" value="+7 (708) 665-95-17" />
          <ContactRow icon="wa" label="WhatsApp 2" value="+7 (771) 222-22-45" />
          <ContactRow icon="wa" label="WhatsApp 3" value="+7 (705) 444-32-31" />
          <ContactRow icon="tg" label="Telegram" value="@senza" />
          <ContactRow icon="ig" label="Instagram" value="@senza" />
        </div>

        <div
          className="w-full h-px my-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(196,149,106,0.2), transparent)",
          }}
        />

        {/* Info pills */}
        <div className="space-y-3 w-full max-w-xs">
          <InfoPill text="Астана, Казахстан" />
          <InfoPill text="Оплата: Kaspi QR" />
          <InfoPill text="Бесплатная доставка от 5 000 ₸" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center pb-12 w-full">
        <div
          className="w-full h-px mb-6"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(196,149,106,0.18), transparent)",
          }}
        />
        <p
          className="text-[9px] tracking-[0.4em] uppercase"
          style={{ color: "rgba(232,226,216,0.25)" }}
        >
          senza.kz
        </p>
      </div>
    </section>
  );
}

interface ContactRowProps {
  icon: "wa" | "tg" | "ig";
  label: string;
  value: string;
}

function ContactRow({ label, value }: ContactRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span
        className="text-[10px] tracking-[0.2em] uppercase"
        style={{ color: "rgba(232,226,216,0.4)" }}
      >
        {label}
      </span>
      <span
        className="text-sm"
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          color: "#E8E2D8",
          letterSpacing: "0.02em",
        }}
      >
        {value}
      </span>
    </div>
  );
}

interface InfoPillProps {
  text: string;
}

function InfoPill({ text }: InfoPillProps) {
  return (
    <div
      className="flex items-center justify-center py-2 px-4"
      style={{ border: "1px solid rgba(196,149,106,0.15)" }}
    >
      <span
        className="text-[11px] tracking-[0.06em]"
        style={{ color: "rgba(232,226,216,0.55)" }}
      >
        {text}
      </span>
    </div>
  );
}

// ── root page ─────────────────────────────────────────────────────────────────

export default function CatalogPdfPage() {
  return (
    <div
      className="catalog-pdf-root"
      style={{
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        background: "#E8E2D8",
      }}
    >
      {/* Page 1 — Cover */}
      <CoverPage />

      {/* Pages 2–9 — Perfumes */}
      {perfumes.map((product) => (
        <PerfumePage key={product.id} product={product} />
      ))}

      {/* Page 10 — Skincare */}
      <SkincareSection />

      {/* Page 11 — Back Cover */}
      <BackCoverPage />
    </div>
  );
}
