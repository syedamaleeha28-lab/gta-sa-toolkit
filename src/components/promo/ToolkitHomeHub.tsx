import { getTranslations } from "next-intl/server";
import { GlassCard } from "@/components/ui/GlassCard";
import { getToolkitHomeUrl } from "@/lib/constants";

interface ToolkitHomeHubProps {
  locale: string;
}

export async function ToolkitHomeHub({ locale }: ToolkitHomeHubProps) {
  const t = await getTranslations("toolkitPromo.home");
  const homeUrl = getToolkitHomeUrl(locale);

  const quickLinks = [
    { anchor: t("linkCheats"), href: `${homeUrl}/cheats` },
    { anchor: t("linkMissions"), href: `${homeUrl}/missions` },
    { anchor: t("linkInstall"), href: `${homeUrl}/install-wizard` },
    { anchor: t("linkTroubleshooting"), href: `${homeUrl}/troubleshooting` },
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
      <GlassCard className="border-neon-green/25 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-purple/10">
        <p className="text-xs font-semibold uppercase tracking-widest text-neon-orange">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 font-display text-3xl text-white">{t("title")}</h2>
        <p className="mt-3 max-w-3xl text-gray-300">{t("description")}</p>
        <p className="mt-4 text-sm text-gray-400">
          {t("contextBefore")}{" "}
          <a
            href={homeUrl}
            className="font-medium text-neon-green underline decoration-neon-green/30 underline-offset-2 hover:text-neon-orange"
          >
            {t("contextAnchor")}
          </a>
          {t("contextAfter")}
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition-colors hover:border-neon-green/40 hover:text-neon-green"
              >
                {link.anchor}
              </a>
            </li>
          ))}
        </ul>
      </GlassCard>
    </section>
  );
}
