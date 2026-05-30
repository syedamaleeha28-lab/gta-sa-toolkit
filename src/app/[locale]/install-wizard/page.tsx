import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { InstallWizard } from "@/components/wizard/InstallWizard";
import { ToolkitPromoCta, ToolkitContextLink } from "@/components/promo/ToolkitPromo";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "wizard" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/install-wizard",
    locale,
  });
}

export default async function InstallWizardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("wizard");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <ToolkitPromoCta locale={locale} variant="installWizard" />
      <ToolkitContextLink locale={locale} variant="installWizard" />
      <InstallWizard />
    </PageShell>
  );
}
