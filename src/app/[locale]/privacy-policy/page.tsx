import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });
  return buildPageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/privacy-policy",
    locale,
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacyPolicy");

  return (
    <LegalLayout title={t("metaTitle")} lastUpdated={t("lastUpdated")}>
      <PrivacyPolicyContent />
    </LegalLayout>
  );
}
