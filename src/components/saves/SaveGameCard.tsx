"use client";

import { useTranslations } from "next-intl";
import { Download, Trophy, Unlock, Sprout } from "lucide-react";
import type { SaveGame } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const icons = {
  "100-percent": Trophy,
  "mission-unlock": Unlock,
  beginner: Sprout,
};

interface SaveGameCardProps {
  save: SaveGame;
}

export function SaveGameCard({ save }: SaveGameCardProps) {
  const t = useTranslations("saves");
  const Icon = icons[save.category] ?? Trophy;

  return (
    <GlassCard hover className="flex flex-col">
      <Icon className="h-8 w-8 text-neon-green" />
      <h3 className="mt-4 font-display text-xl text-white">{save.title}</h3>
      <p className="mt-2 flex-1 text-sm text-gray-400">{save.description}</p>
      <div className="mt-4 flex flex-wrap gap-1">
        {save.tags.map((tag) => (
          <Badge key={tag} variant="green">
            {tag}
          </Badge>
        ))}
      </div>
      <ul className="mt-3 space-y-1 text-xs text-gray-500">
        {save.requirements.map((req) => (
          <li key={req}>• {req}</li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-sm text-gray-300 hover:border-neon-green/30 hover:text-neon-green"
      >
        <Download className="h-4 w-4" />
        {t("download")}
      </a>
    </GlassCard>
  );
}
