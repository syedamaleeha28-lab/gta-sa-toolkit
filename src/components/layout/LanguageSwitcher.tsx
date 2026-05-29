"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "ar") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex rounded-lg border border-white/10 bg-white/5 p-0.5 text-xs">
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={cn(
          "rounded-md px-2.5 py-1 transition-colors",
          locale === "en" ? "bg-neon-green/20 text-neon-green" : "text-gray-400"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLocale("ar")}
        className={cn(
          "rounded-md px-2.5 py-1 transition-colors",
          locale === "ar" ? "bg-neon-green/20 text-neon-green" : "text-gray-400"
        )}
      >
        AR
      </button>
    </div>
  );
}
