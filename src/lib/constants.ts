export const SITE_NAME = "GTA San Andreas Toolkit";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const SITE_DESCRIPTION =
  "Premium GTA San Andreas toolkit — cheat codes, Android install wizard, compatibility checker, mission guides, and more.";

export const PUBLISHER = {
  name: "GTASanad.org",
  url: "https://gtasanad.org",
} as const;

export const OG_IMAGE = "/og-image.svg";

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
