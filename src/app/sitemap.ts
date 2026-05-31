import type { MetadataRoute } from "next";
import { PRODUCTION_SITE_URL, STATIC_ROUTES } from "@/lib/constants";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

const LOCALES = ["en", "ar"] as const;

function sitemapUrl(locale: string, path: string): string {
  const base = PRODUCTION_SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") {
    return `${base}/${locale}`;
  }
  return `${base}/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of LOCALES) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: sitemapUrl(locale, route),
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }

    for (const post of blogPosts) {
      entries.push({
        url: sitemapUrl(locale, `/blog/${post.slug}`),
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
