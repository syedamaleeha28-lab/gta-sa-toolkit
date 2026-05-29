"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { missions } from "@/data/missions";
import { getRelatedPosts } from "@/data/blog";
import { SearchInput } from "@/components/ui/SearchInput";
import { MissionCard } from "./MissionCard";

export function MissionGuide() {
  const t = useTranslations("missions");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return missions;
    return missions.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.region.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="space-y-6">
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder={t("searchPlaceholder")}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((mission) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            relatedPosts={getRelatedPosts("", ["missions", "walkthrough"], 2)}
          />
        ))}
      </div>
    </div>
  );
}
