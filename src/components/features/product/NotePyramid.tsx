import type { ProductNotes } from "@/data/products";

interface NotePyramidProps {
  notes: ProductNotes;
}

interface NoteRowProps {
  tier: "Верхние" | "Средние" | "Базовые";
  notes: string[];
  opacity: number;
}

function NoteRow({ tier, notes, opacity }: NoteRowProps) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex-shrink-0 w-20 text-right pt-0.5">
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: `rgba(196,149,106,${opacity})` }}
        >
          {tier}
        </span>
      </div>
      <div
        className="w-px self-stretch mt-1"
        style={{ background: `rgba(196,149,106,${opacity * 0.5})` }}
      />
      <div className="flex flex-wrap gap-2 pb-6">
        {notes.map((note) => (
          <span
            key={note}
            className="text-[11px] border px-3 py-1 text-[#1A1814]/60"
            style={{ borderColor: "rgba(26,24,20,0.1)" }}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}

export function NotePyramid({ notes }: NotePyramidProps) {
  return (
    <div aria-label="Пирамида нот аромата">
      <h3 className="text-[9px] tracking-[0.5em] uppercase text-[#C4956A] mb-6">
        Пирамида нот
      </h3>
      <div className="space-y-0">
        <NoteRow tier="Верхние" notes={notes.top} opacity={1} />
        <NoteRow tier="Средние" notes={notes.heart} opacity={0.6} />
        <NoteRow tier="Базовые" notes={notes.base} opacity={0.35} />
      </div>
    </div>
  );
}
