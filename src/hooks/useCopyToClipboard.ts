"use client";

import { useCallback } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useAnalytics } from "@/providers/AnalyticsProvider";

export function useCopyToClipboard() {
  const t = useTranslations("cheats");
  const { trackCopy } = useAnalytics();

  const copy = useCallback(
    async (text: string, cheatId?: string) => {
      try {
        await navigator.clipboard.writeText(text);
        toast.success(t("copySuccess"));
        if (cheatId) trackCopy(cheatId);
      } catch {
        toast.error(t("copyError"));
      }
    },
    [t, trackCopy]
  );

  return { copy };
}
