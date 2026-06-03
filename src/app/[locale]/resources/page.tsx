import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { PageShell } from "@/components/ui/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata } from "@/lib/metadata";
import { TOOLKIT_HIGHLIGHTS } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resources" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/resources",
    locale,
  });
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("resources");
  const tHighlights = await getTranslations("home.toolkitHighlights");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <GlassCard>
        <SectionHeading title={t("sectionTitle")} align="left" />
        <p className="mt-6 text-lg leading-relaxed text-gray-300">{t("intro")}</p>
      </GlassCard>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {TOOLKIT_HIGHLIGHTS.map((resource) => (
          <GlassCard key={resource.href} hover>
            <Link
              href={resource.href}
              className="font-display text-lg text-white hover:text-neon-green"
            >
              {tHighlights(resource.labelKey)}
            </Link>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
