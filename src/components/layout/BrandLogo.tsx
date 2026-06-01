import Image from "next/image";
import { Link } from "@/i18n/routing";
import toolkitIcon from "@/assets/toolkit-icon.png";
import { LOGO_ALT } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface BrandLogoProps {
  /** sm: 40px (footer), md: 44–56px (header, responsive) */
  size?: "sm" | "md";
  priority?: boolean;
  className?: string;
}

export function BrandLogo({
  size = "md",
  priority = false,
  className,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={LOGO_ALT}
    >
      <Image
        src={toolkitIcon}
        alt={LOGO_ALT}
        width={512}
        height={512}
        priority={priority}
        className={cn(
          "w-auto rounded-xl object-contain",
          size === "sm" && "h-10 max-h-[40px] w-10",
          size === "md" &&
            "h-10 max-h-[40px] w-10 sm:h-12 sm:max-h-[48px] sm:w-12 md:h-14 md:max-h-[56px] md:w-14",
        )}
      />
    </Link>
  );
}
