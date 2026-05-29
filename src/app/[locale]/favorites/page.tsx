import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { FavoritesList } from "@/components/favorites/FavoritesList";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "favorites" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/favorites",
    locale,
  });
}

export default async function FavoritesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("favorites");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <FavoritesList />
    </PageShell>
  );
}
