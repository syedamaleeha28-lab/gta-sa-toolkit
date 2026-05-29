"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { SaveCategory } from "@/types";
import { saveGames } from "@/data/saves";
import { SaveGameCard } from "./SaveGameCard";
import { cn } from "@/lib/cn";

const categories: (SaveCategory | "all")[] = [
  "all",
  "100-percent",
  "mission-unlock",
  "beginner",
];

export function SaveGameGrid() {
  const t = useTranslations("saves");
  const [filter, setFilter] = useState<SaveCategory | "all">("all");

  const filtered =
    filter === "all"
      ? saveGames
      : saveGames.filter((s) => s.category === filter);

  return (
    <div className="space-y-6">
      <p className="rounded-lg border border-neon-orange/30 bg-neon-orange/10 px-4 py-3 text-sm text-neon-orange">
        {t("disclaimer")}
      </p>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-all",
              filter === cat
                ? "border-neon-green/50 bg-neon-green/10 text-neon-green"
                : "border-white/10 text-gray-400"
            )}
          >
            {t(`categories.${cat}`)}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((save) => (
          <SaveGameCard key={save.id} save={save} />
        ))}
      </div>
    </div>
  );
}
