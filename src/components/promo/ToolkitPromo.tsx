import { getTranslations } from "next-intl/server";
import { GlassCard } from "@/components/ui/GlassCard";
import { getToolkitHomeUrl } from "@/lib/constants";

export type ToolkitPromoVariant =
  | "home"
  | "cheats"
  | "missions"
  | "troubleshooting"
  | "installWizard";

interface ToolkitPromoCtaProps {
  locale: string;
  variant: ToolkitPromoVariant;
}

export async function ToolkitPromoCta({ locale, variant }: ToolkitPromoCtaProps) {
  const t = await getTranslations(`toolkitPromo.${variant}`);
  const homeUrl = getToolkitHomeUrl(locale);

  return (
    <GlassCard className="mb-8 border-neon-green/25 bg-gradient-to-br from-neon-green/10 to-transparent">
      <p className="text-xs font-semibold uppercase tracking-widest text-neon-orange">
        {t("eyebrow")}
      </p>
      <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">
        {t("title")}
      </h2>
      <p className="mt-3 max-w-2xl text-gray-300">{t("description")}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={homeUrl}
          className="inline-flex items-center rounded-xl bg-neon-green px-5 py-2.5 text-sm font-semibold text-gta-dark transition-all hover:shadow-[0_0_24px_rgba(57,255,20,0.35)]"
        >
          {t("ctaPrimary")}
        </a>
        <a
          href={homeUrl}
          className="inline-flex items-center rounded-xl border border-neon-purple/40 px-5 py-2.5 text-sm font-medium text-neon-purple transition-colors hover:bg-neon-purple/10"
        >
          {t("ctaSecondary")}
        </a>
      </div>
    </GlassCard>
  );
}

interface ToolkitContextLinkProps {
  locale: string;
  variant: ToolkitPromoVariant;
}

export async function ToolkitContextLink({
  locale,
  variant,
}: ToolkitContextLinkProps) {
  const t = await getTranslations(`toolkitPromo.${variant}`);
  const homeUrl = getToolkitHomeUrl(locale);

  return (
    <p className="mb-6 text-sm leading-relaxed text-gray-400">
      {t("contextBefore")}{" "}
      <a
        href={homeUrl}
        className="font-medium text-neon-green underline decoration-neon-green/30 underline-offset-2 hover:text-neon-orange"
      >
        {t("contextAnchor")}
      </a>
      {t("contextAfter")}
    </p>
  );
}
