"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

interface StatCardProps {
  label: string;
  value: string | number;
  accent?: "green" | "orange" | "purple";
}

const accentColors = {
  green: "text-neon-green",
  orange: "text-neon-orange",
  purple: "text-neon-purple",
};

export function StatCard({ label, value, accent = "green" }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <GlassCard className="text-center">
        <p className={`font-display text-4xl ${accentColors[accent]}`}>
          {value}
        </p>
        <p className="mt-1 text-sm text-gray-400">{label}</p>
      </GlassCard>
    </motion.div>
  );
}
