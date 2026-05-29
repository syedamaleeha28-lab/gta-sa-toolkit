import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { SaveGameGrid } from "@/components/saves/SaveGameGrid";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "saves" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/saves",
    locale,
  });
}

export default async function SavesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("saves");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <SaveGameGrid />
    </PageShell>
  );
}
