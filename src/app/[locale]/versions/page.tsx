import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { VersionComparisonTable } from "@/components/versions/VersionComparisonTable";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "versions" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/versions",
    locale,
  });
}

export default async function VersionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("versions");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <VersionComparisonTable />
    </PageShell>
  );
}
