import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "orange" | "purple" | "default";
  className?: string;
}

const variants = {
  green: "bg-neon-green/20 text-neon-green border-neon-green/30",
  orange: "bg-neon-orange/20 text-neon-orange border-neon-orange/30",
  purple: "bg-neon-purple/20 text-neon-purple border-neon-purple/30",
  default: "bg-white/10 text-gray-300 border-white/20",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
