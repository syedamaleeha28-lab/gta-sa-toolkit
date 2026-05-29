import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hover && "transition-all duration-300 hover:border-neon-green/30 hover:shadow-neon-green/10",
        className
      )}
    >
      {children}
    </div>
  );
}
