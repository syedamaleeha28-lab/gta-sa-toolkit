"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  return (
    <section className="relative overflow-hidden hero-grid px-4 py-20 sm:px-6 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gta-dark/50 to-gta-dark" />
      <div className="relative mx-auto max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 text-sm font-medium uppercase tracking-widest text-neon-orange"
        >
          {tCommon("tagline")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl leading-none text-white sm:text-7xl lg:text-8xl"
        >
          <span className="neon-text-green text-neon-green">{t("heroTitle")}</span>
          <br />
          <span className="text-neon-orange">{t("heroSubtitle")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
        >
          {t("heroDescription")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/cheats" variant="primary">
            {t("ctaCheats")}
          </Button>
          <Button href="/install-wizard" variant="secondary">
            {t("ctaInstall")}
          </Button>
          <Button href="/compatibility" variant="outline">
            {t("ctaCompatibility")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
