"use client";

import { CapacitorBridge } from "@/components/mobile/CapacitorBridge";
import { FavoritesProvider } from "./FavoritesProvider";
import { AnalyticsProvider } from "./AnalyticsProvider";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsProvider>
      <FavoritesProvider>
        <CapacitorBridge />
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            classNames: {
              toast:
                "bg-gta-panel border border-white/10 text-white font-sans",
            },
          }}
          richColors
        />
      </FavoritesProvider>
    </AnalyticsProvider>
  );
}
