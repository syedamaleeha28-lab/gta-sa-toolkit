import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { CheatFinder } from "@/components/cheats/CheatFinder";
import { ToolkitPromoCta, ToolkitContextLink } from "@/components/promo/ToolkitPromo";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cheats" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/cheats",
    locale,
  });
}

export default async function CheatsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cheats");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <ToolkitPromoCta locale={locale} variant="cheats" />
      <ToolkitContextLink locale={locale} variant="cheats" />
      <CheatFinder />
    </PageShell>
  );
}
