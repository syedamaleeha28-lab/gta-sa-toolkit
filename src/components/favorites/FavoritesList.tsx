"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useFavorites } from "@/providers/FavoritesProvider";
import { cheats } from "@/data/cheats";
import { missions, getGuideId } from "@/data/missions";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { CheatCard } from "@/components/cheats/CheatCard";
import { cn } from "@/lib/cn";

export function FavoritesList() {
  const t = useTranslations("favorites");
  const tCommon = useTranslations("common");
  const { favorites, clearAll, hydrated } = useFavorites();
  const [tab, setTab] = useState<"cheats" | "guides">("cheats");

  const favoriteCheats = cheats.filter((c) => favorites.cheats.includes(c.id));
  const favoriteGuides = missions.filter((m) =>
    favorites.guides.includes(getGuideId(m.id))
  );

  if (!hydrated) {
    return <p className="text-gray-500">{tCommon("loading")}</p>;
  }

  const isEmpty =
    tab === "cheats"
      ? favoriteCheats.length === 0
      : favoriteGuides.length === 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {(["cheats", "guides"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm",
                tab === key
                  ? "bg-neon-green/20 text-neon-green"
                  : "text-gray-400 hover:bg-white/5"
              )}
            >
              {t(`${key}Tab`)}
            </button>
          ))}
        </div>
        {(favorites.cheats.length > 0 || favorites.guides.length > 0) && (
          <Button variant="ghost" onClick={clearAll}>
            {tCommon("clearAll")}
          </Button>
        )}
      </div>

      {isEmpty ? (
        <GlassCard className="text-center">
          <p className="text-gray-400">{t("empty")}</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/cheats" variant="primary">
              {t("goCheats")}
            </Button>
            <Button href="/missions" variant="secondary">
              {t("goMissions")}
            </Button>
          </div>
        </GlassCard>
      ) : tab === "cheats" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteCheats.map((cheat) => (
            <CheatCard key={cheat.id} cheat={cheat} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {favoriteGuides.map((m) => (
            <GlassCard key={m.id}>
              <Link href="/missions" className="font-display text-lg text-white hover:text-neon-green">
                {m.title}
              </Link>
              <p className="text-sm text-gray-500">{m.region}</p>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
