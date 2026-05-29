"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { AnalyticsState } from "@/types";
import {
  defaultAnalytics,
  loadAnalytics,
  saveAnalytics,
} from "@/lib/analytics";

interface AnalyticsContextValue {
  analytics: AnalyticsState;
  trackCheatView: (id: string) => void;
  trackCopy: (id: string) => void;
  trackCategory: (category: string) => void;
  hydrated: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [analytics, setAnalytics] = useState<AnalyticsState>(defaultAnalytics);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setAnalytics(loadAnalytics());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveAnalytics(analytics);
  }, [analytics, hydrated]);

  const trackCheatView = useCallback((id: string) => {
    setAnalytics((prev) => ({
      ...prev,
      cheatViews: {
        ...prev.cheatViews,
        [id]: (prev.cheatViews[id] ?? 0) + 1,
      },
    }));
  }, []);

  const trackCopy = useCallback((id: string) => {
    setAnalytics((prev) => ({
      ...prev,
      copyCounts: {
        ...prev.copyCounts,
        [id]: (prev.copyCounts[id] ?? 0) + 1,
      },
    }));
  }, []);

  const trackCategory = useCallback((category: string) => {
    setAnalytics((prev) => ({
      ...prev,
      categoryViews: {
        ...prev.categoryViews,
        [category]: (prev.categoryViews[category] ?? 0) + 1,
      },
    }));
  }, []);

  return (
    <AnalyticsContext.Provider
      value={{
        analytics,
        trackCheatView,
        trackCopy,
        trackCategory,
        hydrated,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const ctx = useContext(AnalyticsContext);
  if (!ctx)
    throw new Error("useAnalytics must be used within AnalyticsProvider");
  return ctx;
}
