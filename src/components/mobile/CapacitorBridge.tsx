"use client";

import { useEffect } from "react";

export function CapacitorBridge() {
  useEffect(() => {
    let cancelled = false;

    async function initNativeShell() {
      try {
        const { Capacitor } = await import("@capacitor/core");
        if (!Capacitor.isNativePlatform() || cancelled) {
          return;
        }

        const [{ SplashScreen }, { StatusBar, Style }] = await Promise.all([
          import("@capacitor/splash-screen"),
          import("@capacitor/status-bar"),
        ]);

        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: "#0b0b0f" });
        await SplashScreen.hide();
      } catch {
        // Web build — Capacitor plugins are optional at runtime.
      }
    }

    void initNativeShell();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
