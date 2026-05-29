import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { TroubleshootingCenter } from "@/components/troubleshooting/TroubleshootingCenter";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "troubleshooting" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/troubleshooting",
    locale,
  });
}

export default async function TroubleshootingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("troubleshooting");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <TroubleshootingCenter locale={locale} />
    </PageShell>
  );
}
