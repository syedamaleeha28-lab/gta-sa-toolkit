"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { TOOLKIT_HIGHLIGHTS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OfficialResources() {
  const t = useTranslations("home.toolkitHighlights");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TOOLKIT_HIGHLIGHTS.map((resource, i) => (
          <motion.div
            key={resource.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Link href={resource.href} className="group block h-full">
              <GlassCard hover className="flex h-full flex-col">
                <ArrowUpRight className="mb-3 h-5 w-5 text-neon-orange transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                <span className="font-display text-lg text-white group-hover:text-neon-green">
                  {t(resource.labelKey)}
                </span>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
