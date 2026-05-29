"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Gamepad2,
  Download,
  Smartphone,
  Save,
  GitCompare,
  Map,
  Wrench,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFeatures } from "@/data/site";
import { cn } from "@/lib/cn";

const iconMap: Record<string, LucideIcon> = {
  Gamepad2,
  Download,
  Smartphone,
  Save,
  GitCompare,
  Map,
  Wrench,
  Newspaper,
};

const colorMap = {
  "neon-green": "text-neon-green group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]",
  "neon-orange": "text-neon-orange",
  "neon-purple": "text-neon-purple",
};

export function FeaturesGrid() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading title={t("featuresTitle")} subtitle={t("featuresSubtitle")} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeFeatures.map((feature, i) => {
          const Icon = iconMap[feature.icon] ?? Gamepad2;
          return (
            <motion.div
              key={feature.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={feature.href} className="group block h-full">
                <GlassCard hover className="h-full">
                  <Icon
                    className={cn(
                      "mb-4 h-8 w-8 transition-all",
                      colorMap[feature.color as keyof typeof colorMap]
                    )}
                  />
                  <h3 className="font-display text-lg text-white">
                    {tNav(feature.key)}
                  </h3>
                </GlassCard>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
