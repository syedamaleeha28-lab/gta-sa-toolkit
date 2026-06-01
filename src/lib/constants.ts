export const SITE_NAME = "GTA SA Toolkit";
export const PRODUCTION_SITE_URL = "https://gta-sa-toolkit.vercel.app";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_SITE_URL;

/** Absolute toolkit homepage URL for crawlable internal links */
export function getToolkitHomeUrl(locale = "en"): string {
  return `${PRODUCTION_SITE_URL}/${locale}`;
}
export const SITE_DESCRIPTION =
  "Independent GTA SA companion — cheat codes, Android install wizard, compatibility checker, mission guides, and troubleshooting.";

export const TRADEMARK_DISCLAIMER =
  "This application is an independent fan-made companion tool and is not affiliated with, endorsed by, or associated with Rockstar Games or Take-Two Interactive.";

export const PUBLISHER = {
  name: "GTASanad.org",
  alternateName: "GTA Sanad",
  url: "https://gtasanad.org",
  logo: "https://gtasanad.org/gtasanad-logo.webp",
} as const;

export const LOGO_PATH = "/app-icon.png";
export const LOGO_ALT = "GTA SA Toolkit";
export const LOGO_WIDTH = 512;
export const LOGO_HEIGHT = 512;

export const OFFICIAL_RESOURCES = [
  {
    href: "https://gtasanad.org/",
    labelKey: "gtaSaApk",
  },
  {
    href: "https://gtasanad.org/gta-san-andreas-cheat-codes-android/",
    labelKey: "gtaSaCheats",
  },
  {
    href: "https://gtasanad.org/how-to-install-gta-san-andreas-android/",
    labelKey: "gtaSaInstall",
  },
  {
    href: "https://gtasanad.org/gta-vice-city-apk/",
    labelKey: "gtaVcApk",
  },
] as const;

export const OG_IMAGE = "/app-icon.png";

/** Google Search Console site verification token */
export const GOOGLE_SITE_VERIFICATION =
  "SgZAGMRpBrNF-QVfEJt0XJkUieZ2rF3SmG1nLUQ5eHU";

export const NAV_LINKS = [
  { href: "/cheats", key: "cheats" },
  { href: "/install-wizard", key: "installWizard" },
  { href: "/compatibility", key: "compatibility" },
  { href: "/saves", key: "saves" },
  { href: "/versions", key: "versions" },
  { href: "/missions", key: "missions" },
  { href: "/troubleshooting", key: "troubleshooting" },
  { href: "/blog", key: "blog" },
] as const;

export const FOOTER_LINKS = [
  { href: "/resources", key: "resources" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
  { href: "/privacy-policy", key: "privacy" },
  { href: "/disclaimer", key: "disclaimer" },
] as const;

export const STATIC_ROUTES = [
  "",
  "/cheats",
  "/install-wizard",
  "/compatibility",
  "/saves",
  "/versions",
  "/missions",
  "/troubleshooting",
  "/favorites",
  "/analytics",
  "/blog",
  "/resources",
  "/about",
  "/contact",
  "/privacy-policy",
  "/privacy",
  "/disclaimer",
] as const;
