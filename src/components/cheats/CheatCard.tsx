"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Copy, Star } from "lucide-react";
import type { Cheat } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useFavorites } from "@/providers/FavoritesProvider";
import { useAnalytics } from "@/providers/AnalyticsProvider";
import { cn } from "@/lib/cn";

const categoryVariant: Record<string, "green" | "orange" | "purple" | "default"> = {
  weapons: "green",
  vehicles: "orange",
  police: "default",
  health: "green",
  fun: "purple",
  weather: "purple",
};

interface CheatCardProps {
  cheat: Cheat;
}

export function CheatCard({ cheat }: CheatCardProps) {
  const t = useTranslations("cheats.categories");
  const tCommon = useTranslations("common");
  const { copy } = useCopyToClipboard();
  const { toggleCheat, isFavoriteCheat } = useFavorites();
  const { trackCheatView } = useAnalytics();
  const isFav = isFavoriteCheat(cheat.id);

  useEffect(() => {
    trackCheatView(cheat.id);
  }, [cheat.id, trackCheatView]);

  return (
    <GlassCard hover>
      <div className="flex items-start justify-between gap-2">
        <Badge variant={categoryVariant[cheat.category] ?? "default"}>
          {t(cheat.category)}
        </Badge>
        <button
          type="button"
          onClick={() => toggleCheat(cheat.id)}
          className="text-gray-500 hover:text-neon-orange"
          aria-label={isFav ? tCommon("unfavorite") : tCommon("favorite")}
        >
          <Star
            className={cn("h-5 w-5", isFav && "fill-neon-orange text-neon-orange")}
          />
        </button>
      </div>
      <h3 className="mt-3 font-display text-lg text-white">{cheat.name}</h3>
      <p className="mt-1 font-mono text-sm text-neon-green">{cheat.code}</p>
      <p className="mt-2 text-sm text-gray-400">{cheat.description}</p>
      <button
        type="button"
        onClick={() => copy(cheat.code, cheat.id)}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-neon-green/30 bg-neon-green/10 py-2 text-sm text-neon-green transition-colors hover:bg-neon-green/20"
      >
        <Copy className="h-4 w-4" />
        {tCommon("copy")}
      </button>
    </GlassCard>
  );
}
