import type { ProductNotes } from "@/data/products";

interface NotePyramidProps {
  notes: ProductNotes;
}

interface NoteRowProps {
  tier: "Верхние" | "Средние" | "Базовые";
  notes: string[];
  accentClass: string;
  dotClass: string;
}

function NoteRow({ tier, notes, accentClass, dotClass }: NoteRowProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-24 text-right">
        <span className={`text-xs tracking-widest uppercase ${accentClass}`}>
          {tier}
        </span>
      </div>
      <div className={`w-px self-stretch ${dotClass} mt-1`} />
      <div className="flex flex-wrap gap-2 pb-6">
        {notes.map((note) => (
          <span
            key={note}
            className="text-xs border border-[#0A0A0A]/15 text-[#0A0A0A]/70 px-3 py-1"
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
    <div className="space-y-0" aria-label="Пирамида нот аромата">
      <h3 className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
        Пирамида нот
      </h3>
      <div className="space-y-0">
        <NoteRow
          tier="Верхние"
          notes={notes.top}
          accentClass="text-[#C9A96E]"
          dotClass="bg-[#C9A96E]"
        />
        <NoteRow
          tier="Средние"
          notes={notes.heart}
          accentClass="text-[#0A0A0A]/50"
          dotClass="bg-[#0A0A0A]/20"
        />
        <NoteRow
          tier="Базовые"
          notes={notes.base}
          accentClass="text-[#0A0A0A]/30"
          dotClass="bg-[#0A0A0A]/10"
        />
      </div>
    </div>
  );
}
