"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { getStepsForAndroid, wizardErrors, wizardFaqs } from "@/data/wizard";
import { GlassCard } from "@/components/ui/GlassCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { useLocale } from "next-intl";

export function InstallWizard() {
  const t = useTranslations("wizard");
  const locale = useLocale();
  const [androidVersion, setAndroidVersion] = useState(11);
  const steps = getStepsForAndroid(androidVersion);

  const faqSchema = buildFaqPageSchema(
    wizardFaqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
    `${SITE_URL}/${locale}/install-wizard`
  );

  return (
    <>
      <JsonLd data={faqSchema} />
    <div className="space-y-8">
      <GlassCard>
        <label className="block text-sm font-medium text-gray-300">
          {t("selectAndroid")}
        </label>
        <select
          value={androidVersion}
          onChange={(e) => setAndroidVersion(Number(e.target.value))}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-neon-green/50 focus:outline-none"
        >
          {[8, 9, 10, 11, 12, 13, 14].map((v) => (
            <option key={v} value={v} className="bg-gta-panel">
              Android {v}
            </option>
          ))}
        </select>
      </GlassCard>

      <div>
        <h2 className="mb-4 font-display text-2xl text-white">{t("stepsTitle")}</h2>
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neon-green/20 font-display text-lg text-neon-green">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl text-white">{t("errorsTitle")}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {wizardErrors.map((err) => (
            <GlassCard key={err.id}>
              <h3 className="font-medium text-neon-orange">{err.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{err.solution}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl text-white">{t("faqTitle")}</h2>
        <div className="space-y-3">
          {wizardFaqs.map((faq) => (
            <GlassCard key={faq.id}>
              <h3 className="font-medium text-white">{faq.question}</h3>
              <p className="mt-2 text-sm text-gray-400">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
