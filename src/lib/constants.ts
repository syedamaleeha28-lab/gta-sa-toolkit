export const SITE_NAME = "SA Toolkit Pro";
export const PRODUCTION_SITE_URL = "https://gta-sa-toolkit.vercel.app";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_SITE_URL;

/** Absolute toolkit homepage URL for crawlable internal links */
export function getToolkitHomeUrl(locale = "en"): string {
  return `${PRODUCTION_SITE_URL}/${locale}`;
}

export const SITE_DESCRIPTION =
  "Gaming companion utility — guides, tutorials, Android installation help, device compatibility, troubleshooting, tips, and reference materials.";

export const TRADEMARK_DISCLAIMER =
  "This application is an independent fan-made utility and is not affiliated with, endorsed by, sponsored by, or associated with any game publisher or trademark owner.";

export const CONTACT_EMAIL = "support@satoolkitpro.app";

export const LOGO_PATH = "/app-icon.png";
export const LOGO_ALT = "SA Toolkit Pro";
export const LOGO_WIDTH = 512;
export const LOGO_HEIGHT = 512;

/** In-app feature highlights (internal routes only) */
export const TOOLKIT_HIGHLIGHTS = [
  { href: "/cheats", labelKey: "gameTips" },
  { href: "/install-wizard", labelKey: "installGuide" },
  { href: "/compatibility", labelKey: "compatibility" },
  { href: "/troubleshooting", labelKey: "troubleshooting" },
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
