export function BrandIntro() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0E0E0E" }}
      aria-label="О SENZA"
    >
      {/* Subtle gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-[#F5F5F0]/60 text-lg sm:text-xl leading-relaxed">
          Мы — кураторы. Отбираем ароматы, уход за кожей и подарки, которые
          раскрывают тебя. В коллекции SENZA — только то, что прошло наш отбор.
        </p>
        <div
          className="mt-10 mx-auto"
          style={{
            width: "40px",
            height: "1px",
            background: "#C9A96E",
          }}
        />
      </div>
    </section>
  );
}
