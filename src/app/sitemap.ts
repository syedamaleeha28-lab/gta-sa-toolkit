import type { MetadataRoute } from "next";
import { SITE_URL, STATIC_ROUTES } from "@/lib/constants";
import { blogPosts } from "@/data/blog";

const locales = ["en", "ar"] as const;

function absoluteUrl(locale: string, path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}/${locale}${normalizedPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: absoluteUrl(locale, route),
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: absoluteUrl("en", route),
            ar: absoluteUrl("ar", route),
          },
        },
      });
    }

    for (const post of blogPosts) {
      const blogPath = `/blog/${post.slug}`;
      entries.push({
        url: absoluteUrl(locale, blogPath),
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            en: absoluteUrl("en", blogPath),
            ar: absoluteUrl("ar", blogPath),
          },
        },
      });
    }
  }

  return entries;
}
