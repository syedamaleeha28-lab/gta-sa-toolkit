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
    title: t("contactTitle"),
    path: "/contact",
    locale,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <LegalLayout title={t("contactTitle")}>
      <p>For feedback, bug reports, or partnership inquiries:</p>
      <p>
        Email:{" "}
        <a href="mailto:contact@gtatoolkit.example" className="text-neon-green">
          contact@gtatoolkit.example
        </a>
      </p>
      <p>GitHub: Open an issue on our repository for technical support.</p>
    </LegalLayout>
  );
}
