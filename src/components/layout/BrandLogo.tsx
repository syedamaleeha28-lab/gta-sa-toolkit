import Image from "next/image";
import {
  LOGO_ALT,
  LOGO_PATH,
  LOGO_WIDTH,
  LOGO_HEIGHT,
  PUBLISHER,
} from "@/lib/constants";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { cn } from "@/lib/cn";

interface BrandLogoProps {
  /** sm: 40px height (footer), md: 44–56px (header, responsive) */
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
    <ExternalLink
      href={PUBLISHER.url}
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={LOGO_PATH}
        alt={LOGO_ALT}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={cn(
          "w-auto object-contain",
          size === "sm" && "h-10 max-h-[40px]",
          size === "md" && "h-10 max-h-[40px] sm:h-12 sm:max-h-[48px] md:h-14 md:max-h-[56px]"
        )}
      />
    </ExternalLink>
  );
}
