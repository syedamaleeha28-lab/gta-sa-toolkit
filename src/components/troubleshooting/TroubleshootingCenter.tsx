import { getTranslations } from "next-intl/server";
import { troubleshootingIssues } from "@/data/troubleshooting";
import { GlassCard } from "@/components/ui/GlassCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export async function TroubleshootingCenter({
  locale,
}: {
  locale: string;
}) {
  const t = await getTranslations("troubleshooting");

  const faqSchema = buildFaqPageSchema(
    troubleshootingIssues.map((issue) => ({
      question: issue.title,
      answer: `${issue.summary} ${issue.steps.join(" ")}`,
    })),
    `${SITE_URL}/${locale}/troubleshooting`
  );

  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="space-y-8">
        {troubleshootingIssues.map((issue) => (
          <div key={issue.id} id={issue.slug}>
            <GlassCard>
              <h2 className="font-display text-2xl text-neon-orange">
                {issue.title}
              </h2>
              <p className="mt-2 text-gray-400">{issue.summary}</p>
              <h3 className="mt-4 text-sm font-medium text-white">
                {t("solutions")}
              </h3>
              <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-gray-300">
                {issue.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </GlassCard>
          </div>
        ))}
      </div>
    </>
  );
}
