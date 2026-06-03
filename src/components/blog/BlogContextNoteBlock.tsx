import { GlassCard } from "@/components/ui/GlassCard";
import type { BlogContextNote } from "@/types";

interface BlogContextNoteBlockProps {
  note: BlogContextNote;
  locale: string;
}

export function BlogContextNoteBlock({ note, locale }: BlogContextNoteBlockProps) {
  const text = locale === "ar" ? note.ar : note.en;

  return (
    <GlassCard>
      <p className="leading-relaxed text-gray-300">
        {text.before}
        {text.after}
      </p>
    </GlassCard>
  );
}
