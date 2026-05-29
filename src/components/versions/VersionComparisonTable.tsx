import { getTranslations } from "next-intl/server";
import { gameVersions } from "@/data/versions";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSoftwareApplicationSchema } from "@/lib/schema";

export async function VersionComparisonTable({
  locale,
}: {
  locale: string;
}) {
  const t = await getTranslations("versions");

  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema(locale)} />
      <div className="overflow-x-auto">
        <div className="grid min-w-[640px] gap-4 lg:grid-cols-3">
          {gameVersions.map((version) => (
            <GlassCard
              key={version.id}
              className={
                version.recommended
                  ? "ring-2 ring-neon-green/50"
                  : undefined
              }
            >
              {version.recommended && (
                <Badge variant="green" className="mb-3">
                  {t("recommended")}
                </Badge>
              )}
              <h3 className="font-display text-2xl text-white">{version.name}</h3>
              <p className="text-neon-orange">{version.version}</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">{t("size")}</dt>
                  <dd className="text-white">{version.size}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t("android")}</dt>
                  <dd className="text-white">{version.androidMin}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t("graphics")}</dt>
                  <dd className="text-neon-green">
                    {version.graphicsRating}/10
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500">{t("features")}</dt>
                  <dd>
                    <ul className="mt-1 space-y-1 text-gray-300">
                      {version.features.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </GlassCard>
          ))}
        </div>
      </div>
    </>
  );
}
