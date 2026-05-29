"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const t = useTranslations("home");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading title={t("testimonialsTitle")} />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <GlassCard className="h-full">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-neon-orange text-neon-orange"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-300">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 font-medium text-white">{item.name}</p>
              <p className="text-xs text-gray-500">{item.role}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
