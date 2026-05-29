import type { AnalyticsState } from "@/types";
import { safeParseJSON } from "./storage";

export const ANALYTICS_KEY = "gta-toolkit-analytics";

export const defaultAnalytics: AnalyticsState = {
  cheatViews: {},
  copyCounts: {},
  categoryViews: {},
};

export function loadAnalytics(): AnalyticsState {
  if (typeof window === "undefined") return defaultAnalytics;
  return safeParseJSON(
    localStorage.getItem(ANALYTICS_KEY),
    defaultAnalytics
  );
}

export function saveAnalytics(state: AnalyticsState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(state));
}

export function getTopCopied(
  copyCounts: Record<string, number>,
  limit = 5
): { id: string; count: number }[] {
  return Object.entries(copyCounts)
    .map(([id, count]) => ({ id, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function getTopCategories(
  categoryViews: Record<string, number>
): { category: string; count: number }[] {
  return Object.entries(categoryViews)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

export function getTotalViews(cheatViews: Record<string, number>): number {
  return Object.values(cheatViews).reduce((sum, n) => sum + n, 0);
}
