import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata } from "@/lib/metadata";
import { PUBLISHER, OFFICIAL_RESOURCES } from "@/lib/constants";

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
  const tHome = await getTranslations("home.officialResources");

  return (
    <PageShell title={t("title")} description={t("description")}>
      <GlassCard>
        <SectionHeading title={t("sectionTitle")} align="left" />
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          {t("backlinkBefore")}{" "}
          <a
            href={PUBLISHER.url}
            className="font-medium text-neon-green underline decoration-neon-green/40 underline-offset-2 hover:text-neon-orange hover:decoration-neon-orange"
          >
            {t("backlinkLabel")}
          </a>
          .
        </p>
        <p className="mt-4 text-gray-400">{t("intro")}</p>
      </GlassCard>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {OFFICIAL_RESOURCES.map((resource) => (
          <GlassCard key={resource.href} hover>
            <a
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-lg text-white hover:text-neon-green"
            >
              {tHome(resource.labelKey)}
            </a>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
