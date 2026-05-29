import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return buildPageMetadata({
    title: t("aboutTitle"),
    path: "/about",
    locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <LegalLayout title={t("aboutTitle")}>
      <p>
        {SITE_NAME} is an unofficial fan-made toolkit for GTA San Andreas Android
        players. We provide cheat codes, installation guides, compatibility tools,
        mission walkthroughs, and troubleshooting resources.
      </p>
      <p>
        Our mission is to help players enjoy GTA SA on mobile with the best
        experience possible — without hunting across dozens of forums.
      </p>
    </LegalLayout>
  );
}
