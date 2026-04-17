interface Review {
  text: string;
  name: string;
  age: number;
}

const REVIEWS: Review[] = [
  {
    text: "Barakkat Rouge стал частью моего ритуала. Комплименты каждый день.",
    name: "Айгерим",
    age: 24,
  },
  {
    text: "Попросил подобрать под характер — предложили BLEU и Tobacco Vanille. Попали точно.",
    name: "Данияр",
    age: 28,
  },
  {
    text: "Набор Gift для подруги — помогли выбрать аромат по описанию её характера.",
    name: "Мадина",
    age: 31,
  },
  {
    text: "Крем 4-in-1 — кожа как после корейского салона.",
    name: "Асем",
    age: 22,
  },
];

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div
      className="p-7 space-y-4 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <p className="text-[#C9A96E] text-lg leading-none" aria-hidden="true">
        &ldquo;
      </p>
      <p className="text-[#F5F5F0]/70 text-sm leading-relaxed">{review.text}</p>
      <p className="text-[10px] text-[#F5F5F0]/30 tracking-[0.3em] uppercase">
        {review.name}, {review.age}
      </p>
    </div>
  );
}

export function Reviews() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "#0A0A0A" }}
      aria-label="Отзывы клиентов"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase mb-3">
            Отзывы
          </p>
          <h2
            className="font-heading text-[#F5F5F0]"
            style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
          >
            Говорят клиенты
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
