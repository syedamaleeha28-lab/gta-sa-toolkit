import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { CompatibilityChecker } from "@/components/compatibility/CompatibilityChecker";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compatibility" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/compatibility",
    locale,
  });
}

export default async function CompatibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("compatibility");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <CompatibilityChecker />
    </PageShell>
  );
}
