import { cn } from "@/lib/cn";
import { Link } from "@/i18n/routing";

type Variant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-neon-green text-gta-dark font-semibold hover:shadow-[0_0_24px_rgba(57,255,20,0.4)]",
  secondary:
    "bg-neon-orange/20 text-neon-orange border border-neon-orange/40 hover:bg-neon-orange/30",
  ghost: "bg-white/5 text-white hover:bg-white/10",
  outline:
    "border border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 disabled:opacity-50",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
