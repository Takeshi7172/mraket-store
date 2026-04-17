import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      aria-label="Главный баннер"
      style={{ background: "#FFFCF5" }}
    >
      {/* Subtle warm radial — barely visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Eyebrow */}
        <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-10">
          АРОМАТЫ · УХОД · ПОДАРКИ
        </p>

        {/* Headline */}
        <h1
          className="font-heading leading-[0.92] tracking-tight mb-8 select-none text-[#1A1A1A]"
          style={{ fontSize: "clamp(3rem,8vw,6rem)" }}
        >
          Почувствуй,
          <br />
          <em className="text-[#C9A96E]" style={{ fontStyle: "italic" }}>
            это
          </em>{" "}
          <span>SENZA.</span>
        </h1>

        {/* Subline */}
        <p className="text-[#1A1A1A]/55 text-lg sm:text-xl max-w-lg leading-relaxed mb-10">
          Собираем коллекцию для тех, кто выбирает по чувствам — не по бренду.
        </p>

        {/* CTA */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#1A1A1A] px-10 py-4 text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#B8944F] transition-colors duration-300"
        >
          Смотреть коллекцию
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[#1A1A1A]/25 text-[9px] tracking-[0.5em] uppercase">
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
