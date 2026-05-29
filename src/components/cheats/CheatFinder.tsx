"use client";

import { useMemo, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import type { CheatCategory } from "@/types";
import { cheats } from "@/data/cheats";
import { SearchInput } from "@/components/ui/SearchInput";
import { CheatCard } from "./CheatCard";
import { CategoryFilter } from "./CategoryFilter";
import { useAnalytics } from "@/providers/AnalyticsProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { useLocale } from "next-intl";

export function CheatFinder() {
  const t = useTranslations("cheats");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const { trackCategory } = useAnalytics();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CheatCategory>("all");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return cheats.filter((c) => {
      const matchCat = category === "all" || c.category === category;
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, category]);

  useEffect(() => {
    if (category !== "all") trackCategory(category);
  }, [category, trackCategory]);

  const faqSchema = buildFaqPageSchema(
    [
      { question: t("faq.q1"), answer: t("faq.a1") },
      { question: t("faq.q2"), answer: t("faq.a2") },
    ],
    `${SITE_URL}/${locale}/cheats`
  );

  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="space-y-6">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder={t("searchPlaceholder")}
        />
        <CategoryFilter selected={category} onSelect={setCategory} />
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">{tCommon("noResults")}</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cheat) => (
              <CheatCard key={cheat.id} cheat={cheat} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
