import { SITE_URL, STATIC_ROUTES } from "@/lib/constants";
import { blogPosts } from "@/data/blog";

const locales = ["en", "ar"] as const;

export type SitemapEntry = {
  url: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

function absoluteUrl(locale: string, path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") {
    return `${base}/${locale}`;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}/${locale}${normalizedPath}`;
}

function toLastmod(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toISOString().split("T")[0];
}

export function getSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const today = toLastmod(new Date());

  for (const locale of locales) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: absoluteUrl(locale, route),
        lastmod: today,
        changefreq: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }

    for (const post of blogPosts) {
      entries.push({
        url: absoluteUrl(locale, `/blog/${post.slug}`),
        lastmod: toLastmod(post.date),
        changefreq: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildSitemapXml(entries: SitemapEntry[]): string {
  const urlNodes = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;
}
