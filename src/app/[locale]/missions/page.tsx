import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { MissionGuide } from "@/components/missions/MissionGuide";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "missions" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/missions",
    locale,
  });
}

export default async function MissionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("missions");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <MissionGuide />
    </PageShell>
  );
}
