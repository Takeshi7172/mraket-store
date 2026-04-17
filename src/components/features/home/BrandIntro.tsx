export function BrandIntro() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "#FFFCF5" }}
      aria-label="О SENZA"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#1A1A1A]/60 text-base sm:text-lg leading-relaxed">
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
