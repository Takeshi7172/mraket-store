const MARQUEE_TEXT =
  "SENSO · ЧУВСТВА · АРОМАТ · КОЛЛЕКЦИЯ · АСТАНА · КУРАТОРЫ · ЭМОЦИИ · НАСТРОЕНИЕ · СТИЛЬ · ";

export function MarqueeStrip() {
  // Duplicate for seamless loop
  const repeated = MARQUEE_TEXT.repeat(3);

  return (
    <div
      className="relative overflow-hidden py-5 select-none"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(201,169,110,0.15)",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
      }}
      aria-hidden="true"
    >
      <div
        className="whitespace-nowrap"
        style={{
          display: "inline-block",
          animation: "marqueeScroll 28s linear infinite",
        }}
      >
        <span
          className="text-[#C9A96E]/35 text-xs tracking-[0.5em] uppercase"
          style={{ letterSpacing: "0.5em" }}
        >
          {repeated}
        </span>
        {/* Second copy for seamless loop */}
        <span
          className="text-[#C9A96E]/35 text-xs tracking-[0.5em] uppercase"
          style={{ letterSpacing: "0.5em" }}
        >
          {repeated}
        </span>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
