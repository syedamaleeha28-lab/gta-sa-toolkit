"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { calculateCompatibility } from "@/lib/compatibility";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import type { CompatibilityResult } from "@/types";

export function CompatibilityChecker() {
  const t = useTranslations("compatibility");
  const [androidVersion, setAndroidVersion] = useState(11);
  const [ram, setRam] = useState(4);
  const [storage, setStorage] = useState(8);
  const [result, setResult] = useState<CompatibilityResult | null>(null);

  const handleCheck = () => {
    setResult(calculateCompatibility(androidVersion, ram, storage));
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <GlassCard>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">{t("androidVersion")}</label>
            <input
              type="range"
              min={8}
              max={14}
              value={androidVersion}
              onChange={(e) => setAndroidVersion(Number(e.target.value))}
              className="mt-2 w-full accent-neon-green"
            />
            <p className="text-neon-green">Android {androidVersion}</p>
          </div>
          <div>
            <label className="text-sm text-gray-400">{t("ram")}</label>
            <input
              type="range"
              min={2}
              max={16}
              value={ram}
              onChange={(e) => setRam(Number(e.target.value))}
              className="mt-2 w-full accent-neon-orange"
            />
            <p className="text-neon-orange">{ram} GB</p>
          </div>
          <div>
            <label className="text-sm text-gray-400">{t("storage")}</label>
            <input
              type="range"
              min={2}
              max={32}
              value={storage}
              onChange={(e) => setStorage(Number(e.target.value))}
              className="mt-2 w-full accent-neon-purple"
            />
            <p className="text-neon-purple">{storage} GB</p>
          </div>
          <Button onClick={handleCheck} className="w-full">
            {t("check")}
          </Button>
        </div>
      </GlassCard>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <GlassCard className="h-full">
              <p className="text-sm text-gray-400">{t("score")}</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-6xl text-neon-green">
                  {result.score}
                </span>
                <span className="mb-2 text-gray-500">/100</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-green to-neon-orange"
                  initial={{ width: 0 }}
                  animate={{ width: `${result.score}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <dl className="mt-6 space-y-3">
                <div>
                  <dt className="text-sm text-gray-500">{t("recommendedVersion")}</dt>
                  <dd className="text-lg text-white">{result.compatibleVersion}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">{t("graphics")}</dt>
                  <dd className="text-lg text-neon-orange">{result.graphics}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">{t("verdict")}</dt>
                  <dd className="text-gray-300">{result.verdict}</dd>
                </div>
              </dl>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
