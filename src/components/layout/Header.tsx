"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Heart, BarChart3 } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gta-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <BrandLogo size="md" priority />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.slice(0, 6).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:text-white",
                pathname === link.href && "bg-white/5 text-neon-green"
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/favorites"
            className="hidden rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-neon-orange sm:block"
            aria-label={t("favorites")}
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link
            href="/analytics"
            className="hidden rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-neon-purple sm:block"
            aria-label={t("analytics")}
          >
            <BarChart3 className="h-5 w-5" />
          </Link>
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-lg p-2 text-gray-400 hover:bg-white/5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-gray-300"
              onClick={() => setOpen(false)}
            >
              {t("home")}
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-gray-300 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/favorites"
              className="rounded-lg px-3 py-2 text-gray-300"
              onClick={() => setOpen(false)}
            >
              {t("favorites")}
            </Link>
            <Link
              href="/analytics"
              className="rounded-lg px-3 py-2 text-gray-300"
              onClick={() => setOpen(false)}
            >
              {t("analytics")}
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-600">{tCommon("disclaimer")}</p>
        </nav>
      )}
    </header>
  );
}
