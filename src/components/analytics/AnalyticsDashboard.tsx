"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { useAnalytics } from "@/providers/AnalyticsProvider";
import {
  getTopCopied,
  getTopCategories,
  getTotalViews,
} from "@/lib/analytics";
import { getCheatById } from "@/data/cheats";
import { GlassCard } from "@/components/ui/GlassCard";

export function AnalyticsDashboard() {
  const t = useTranslations("analytics");
  const { analytics, hydrated } = useAnalytics();

  const totalViews = useMemo(
    () => getTotalViews(analytics.cheatViews),
    [analytics.cheatViews]
  );
  const topCopied = useMemo(
    () => getTopCopied(analytics.copyCounts),
    [analytics.copyCounts]
  );
  const topCategories = useMemo(
    () => getTopCategories(analytics.categoryViews),
    [analytics.categoryViews]
  );

  const maxCopy = topCopied[0]?.count ?? 1;
  const maxCat = topCategories[0]?.count ?? 1;

  if (!hydrated) return null;

  return (
    <div className="space-y-8">
      <p className="rounded-lg border border-neon-purple/30 bg-neon-purple/10 px-4 py-3 text-sm text-gray-300">
        {t("localNote")}
      </p>

      <GlassCard>
        <p className="text-sm text-gray-400">{t("totalViews")}</p>
        <p className="font-display text-5xl text-neon-green">{totalViews}</p>
      </GlassCard>

      <GlassCard>
        <h2 className="mb-4 font-display text-xl text-white">{t("topCopied")}</h2>
        {topCopied.length === 0 ? (
          <p className="text-sm text-gray-500">—</p>
        ) : (
          <ul className="space-y-3">
            {topCopied.map(({ id, count }) => {
              const cheat = getCheatById(id);
              return (
                <li key={id}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-300">
                      {cheat?.name ?? id}
                    </span>
                    <span className="text-neon-green">{count}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-neon-green transition-all"
                      style={{ width: `${(count / maxCopy) * 100}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </GlassCard>

      <GlassCard>
        <h2 className="mb-4 font-display text-xl text-white">
          {t("popularCategories")}
        </h2>
        {topCategories.length === 0 ? (
          <p className="text-sm text-gray-500">—</p>
        ) : (
          <ul className="space-y-3">
            {topCategories.map(({ category, count }) => (
              <li key={category}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="capitalize text-gray-300">{category}</span>
                  <span className="text-neon-orange">{count}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-neon-orange transition-all"
                    style={{ width: `${(count / maxCat) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </div>
  );
}
