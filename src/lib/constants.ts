export const SITE_NAME = "GTA San Andreas Toolkit";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const SITE_DESCRIPTION =
  "Premium GTA San Andreas toolkit — cheat codes, Android install wizard, compatibility checker, mission guides, and more.";

export const PUBLISHER = {
  name: "GTASanad.org",
  alternateName: "GTA Sanad",
  url: "https://gtasanad.org",
  /** Canonical logo on main site (upload gtasanad-logo.webp) */
  logo: "https://gtasanad.org/gtasanad-logo.webp",
} as const;

export const LOGO_PATH = "/gtasanad-logo.png";
export const LOGO_ALT = "GTA Sanad Logo";
export const LOGO_WIDTH = 240;
export const LOGO_HEIGHT = 80;

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

export const OG_IMAGE = "/gtasanad-logo.png";

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
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
  { href: "/privacy", key: "privacy" },
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
  "/about",
  "/contact",
  "/privacy",
  "/disclaimer",
] as const;
