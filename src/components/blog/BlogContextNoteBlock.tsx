import { GlassCard } from "@/components/ui/GlassCard";
import { PUBLISHER } from "@/lib/constants";
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
        <a
          href={PUBLISHER.url}
          className="font-medium text-neon-green underline decoration-neon-green/40 underline-offset-2 hover:text-neon-orange hover:decoration-neon-orange"
        >
          GTA Sanad
        </a>
        {text.after}
      </p>
    </GlassCard>
  );
}
