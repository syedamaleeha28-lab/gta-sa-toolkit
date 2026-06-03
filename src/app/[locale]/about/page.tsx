import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_NAME, TRADEMARK_DISCLAIMER } from "@/lib/constants";

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
        {SITE_NAME} is an independent gaming companion utility for Android. We
        provide reference guides, installation tutorials, device compatibility
        tools, mission walkthroughs, troubleshooting resources, and gaming tips.
      </p>
      <p>
        Our mission is to help mobile players get practical reference tools in one
        place — without hunting across dozens of forums.
      </p>
      <p className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-4 text-sm text-gray-300">
        {TRADEMARK_DISCLAIMER}
      </p>
    </LegalLayout>
  );
}
