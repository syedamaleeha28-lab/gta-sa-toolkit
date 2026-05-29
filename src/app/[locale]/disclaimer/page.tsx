import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { buildPageMetadata } from "@/lib/metadata";

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
      <p>
        This site is an unofficial fan resource and is not affiliated with,
        endorsed by, or connected to Rockstar Games, Take-Two Interactive, or
        any official GTA brand.
      </p>
      <p>
        GTA San Andreas is a trademark of Rockstar Games. All game content
        references are for educational purposes.
      </p>
      <p>
        Download links and save files are placeholders. Always obtain games from
        official sources where available.
      </p>
    </LegalLayout>
  );
}
