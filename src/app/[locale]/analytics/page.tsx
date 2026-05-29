import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { AnalyticsDashboard } from "@/components/analytics/AnalyticsDashboard";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "analytics" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/analytics",
    locale,
  });
}

export default async function AnalyticsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("analytics");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <AnalyticsDashboard />
    </PageShell>
  );
}
