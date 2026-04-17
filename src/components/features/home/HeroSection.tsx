import Image from "next/image";
import Link from "next/link";

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`;

export function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      aria-label="Главный баннер"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background product image collage — 3 columns, heavily darkened */}
      <div className="absolute inset-0 grid grid-cols-3" aria-hidden="true">
        <div className="relative overflow-hidden">
          <Image
            src="/products/photo_10.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "sepia(30%) brightness(0.5) contrast(1.2)" }}
            sizes="34vw"
            priority
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/products/photo_4.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "sepia(30%) brightness(0.5) contrast(1.2)" }}
            sizes="34vw"
            priority
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/products/photo_9.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "sepia(30%) brightness(0.5) contrast(1.2)" }}
            sizes="34vw"
            priority
          />
        </div>
      </div>

      {/* Opacity mask over the collage */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "rgba(10,10,10,0.55)" }}
      />

      {/* Warm gold radial glow at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, rgba(201,169,110,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Vignette — darken edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.15) 50%, rgba(10,10,10,0.75) 100%)",
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        aria-hidden="true"
        style={{ backgroundImage: GRAIN_SVG }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-20 animate-fade-in">
        {/* Eyebrow */}
        <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-10">
          АРОМАТЫ · УХОД · ПОДАРКИ
        </p>

        {/* Headline */}
        <h1
          className="font-heading leading-[0.92] tracking-tight mb-8 select-none text-[#F5F5F0]"
          style={{ fontSize: "clamp(3.5rem,10vw,8rem)" }}
        >
          Почувствуй,
          <br />
          <em className="text-[#C9A96E]" style={{ fontStyle: "italic" }}>
            это
          </em>{" "}
          <span>SENZA.</span>
        </h1>

        {/* Subline */}
        <p className="text-[#F5F5F0]/50 text-lg sm:text-xl max-w-lg leading-relaxed mb-12">
          Собираем коллекцию для тех, кто выбирает по чувствам — не по бренду.
        </p>

        {/* CTA */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0A0A0A] px-12 py-5 text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#B8944F] transition-colors duration-300 rounded-full"
        >
          Смотреть коллекцию
        </Link>
      </div>

      {/* Bottom gold separator line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)",
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[#F5F5F0]/25 text-[9px] tracking-[0.5em] uppercase">
          Листать
        </span>
        <svg
          className="w-4 h-4 text-[#C9A96E] animate-scroll-bounce"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4" />
        </svg>
      </div>
    </section>
  );
}
