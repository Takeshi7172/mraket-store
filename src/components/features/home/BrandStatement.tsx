import { SectionReveal } from "@/components/features/home/SectionReveal";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "8+", label: "ароматов в коллекции" },
  { value: "4 500 ₸", label: "цена за 60 мл" },
  { value: "от 5 000 ₸", label: "бесплатная доставка" },
  { value: "Kaspi QR", label: "удобная оплата" },
];

export function BrandStatement() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A]" aria-labelledby="brand-statement-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <SectionReveal>
            <div className="space-y-6">
              <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase">
                Почему SENSO
              </p>
              <h2
                id="brand-statement-heading"
                className="font-heading text-4xl lg:text-5xl text-[#F5F5F0] leading-tight"
              >
                Твои чувства.
                <br />
                <span className="text-[#C9A96E] italic">Твой аромат.</span>
              </h2>
              <p className="text-[#F5F5F0]/60 text-lg leading-relaxed max-w-md">
                Мы не копируем — мы вдохновляемся. Наши ароматы AUMEKA создаются
                из тех же семейств нот, что и их роскошные прообразы.
                Разница только в цене.
              </p>
              <p className="text-[#F5F5F0]/60 leading-relaxed max-w-md">
                Флакон 60 мл за <span className="text-[#C9A96E]">4 500 ₸</span> вместо
                20 000–80 000 ₸ за оригинал. Те же эмоции — без переплаты за бренд.
              </p>
              <div className="pt-2">
                <p className="text-[#F5F5F0]/40 text-sm italic">
                  «Аромат — это эмоция. Её не должна стоить целая зарплата.»
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Stats */}
          <SectionReveal delay={200}>
            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-white/10 p-6 space-y-2 hover:border-[#C9A96E]/40 transition-colors"
                >
                  <p className="font-heading text-2xl lg:text-3xl text-[#C9A96E]">
                    {stat.value}
                  </p>
                  <p className="text-[#F5F5F0]/50 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
