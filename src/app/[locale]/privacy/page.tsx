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
    title: t("privacyTitle"),
    path: "/privacy",
    locale,
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <LegalLayout title={t("privacyTitle")}>
      <p>
        We do not collect personal data on our servers. Favorites and analytics
        are stored locally in your browser via localStorage only.
      </p>
      <p>
        Third-party hosting (e.g. Vercel) may process standard web logs (IP,
        user-agent) per their privacy policies.
      </p>
      <p>We do not sell or share your data with advertisers.</p>
    </LegalLayout>
  );
}
