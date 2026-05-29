import { cheats } from "./cheats";
import { missions } from "./missions";
import { blogPosts } from "./blog";

export const siteStats = {
  cheats: cheats.length,
  missions: missions.length,
  articles: blogPosts.length,
  users: "50K+",
};

export const homeFeatures = [
  { href: "/cheats", icon: "Gamepad2", key: "cheats", color: "neon-green" },
  { href: "/install-wizard", icon: "Download", key: "installWizard", color: "neon-orange" },
  { href: "/compatibility", icon: "Smartphone", key: "compatibility", color: "neon-purple" },
  { href: "/saves", icon: "Save", key: "saves", color: "neon-green" },
  { href: "/versions", icon: "GitCompare", key: "versions", color: "neon-orange" },
  { href: "/missions", icon: "Map", key: "missions", color: "neon-purple" },
  { href: "/troubleshooting", icon: "Wrench", key: "troubleshooting", color: "neon-green" },
  { href: "/blog", icon: "Newspaper", key: "blog", color: "neon-orange" },
] as const;
