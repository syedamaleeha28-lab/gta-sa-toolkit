"use client";

import { useTranslations } from "next-intl";
import { StatCard } from "@/components/ui/StatCard";
import { siteStats } from "@/data/site";

export function StatsBar() {
  const t = useTranslations("home");

  const stats = [
    { label: t("statsCheats"), value: siteStats.cheats, accent: "green" as const },
    { label: t("statsMissions"), value: siteStats.missions, accent: "orange" as const },
    { label: t("statsArticles"), value: siteStats.articles, accent: "purple" as const },
    { label: t("statsUsers"), value: siteStats.users, accent: "green" as const },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
