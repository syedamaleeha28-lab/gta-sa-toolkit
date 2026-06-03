"use client";

import { useTranslations } from "next-intl";
import { Github, Twitter } from "lucide-react";
import { Link } from "@/i18n/routing";
import { FOOTER_LINKS, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <footer className="mt-auto border-t border-white/10 bg-gta-panel">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <BrandLogo size="sm" />
              <span className="font-display text-lg text-white">{SITE_NAME}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-gray-400">
              {t("description")}
            </p>
            <p className="mt-2 text-xs text-gray-600">{tCommon("disclaimer")}</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Tools</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-neon-green"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-neon-green"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {SITE_NAME}. {t("rights")}
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm sm:justify-start">
              {FOOTER_LINKS.filter((link) =>
                ["/privacy-policy", "/disclaimer", "/contact"].includes(link.href),
              ).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-neon-green"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-green"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-green"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
