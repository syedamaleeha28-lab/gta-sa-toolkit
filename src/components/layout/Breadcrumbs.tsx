"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { buildBreadcrumbListSchema } from "@/lib/schema";
import { useLocale } from "next-intl";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  currentLabel: string;
}

export function Breadcrumbs({ currentLabel }: BreadcrumbsProps) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const pageUrl = `${SITE_URL}/${locale}${pathname === "/" ? "" : pathname}`;

  const schema = buildBreadcrumbListSchema(
    [
      { name: t("home"), url: `${SITE_URL}/${locale}` },
      { name: currentLabel, url: pageUrl },
    ],
    pageUrl
  );

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500">
        <Link href="/" className="hover:text-neon-green">
          {t("home")}
        </Link>
        <ChevronRight className="h-4 w-4 rtl:rotate-180" />
        <span className="text-gray-300">{currentLabel}</span>
      </nav>
    </>
  );
}
