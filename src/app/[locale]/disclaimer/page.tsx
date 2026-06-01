import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { buildPageMetadata } from "@/lib/metadata";
import { TRADEMARK_DISCLAIMER } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return buildPageMetadata({
    title: t("disclaimerTitle"),
    path: "/disclaimer",
    locale,
  });
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <LegalLayout title={t("disclaimerTitle")}>
      <p>{TRADEMARK_DISCLAIMER}</p>
      <p>
        This companion app does not distribute, sell, or license the game. Game
        names and related terms are used only for descriptive reference to help
        players find guides and tools.
      </p>
      <p>
        Download links and save files are educational references. Always obtain
        games from legitimate sources where available.
      </p>
    </LegalLayout>
  );
}
