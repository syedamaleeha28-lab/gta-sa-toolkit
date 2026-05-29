"use client";

import { useTranslations } from "next-intl";
import type { CheatCategory } from "@/types";
import { cn } from "@/lib/cn";

const categories: CheatCategory[] = [
  "all",
  "weapons",
  "vehicles",
  "police",
  "health",
  "fun",
  "weather",
];

const categoryColors: Record<string, string> = {
  all: "border-white/20 text-white",
  weapons: "border-neon-green/40 text-neon-green",
  vehicles: "border-neon-orange/40 text-neon-orange",
  police: "border-red-400/40 text-red-400",
  health: "border-emerald-400/40 text-emerald-400",
  fun: "border-neon-purple/40 text-neon-purple",
  weather: "border-cyan-400/40 text-cyan-400",
};

interface CategoryFilterProps {
  selected: CheatCategory;
  onSelect: (cat: CheatCategory) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const t = useTranslations("cheats.categories");

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm transition-all",
            categoryColors[cat],
            selected === cat && "bg-white/10 ring-1 ring-white/20"
          )}
        >
          {t(cat)}
        </button>
      ))}
    </div>
  );
}
