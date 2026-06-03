import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  LOGO_PATH,
  LOGO_ALT,
} from "./constants";
import { gameVersions } from "@/data/versions";

/** Absolute logo URL for JSON-LD (toolkit-hosted asset) */
export function getPublisherLogoUrl(): string {
  return `${SITE_URL}${LOGO_PATH}`;
}

/** Toolkit app icon as schema.org ImageObject */
export function publisherLogoImageObject() {
  const logoUrl = getPublisherLogoUrl();
  return {
    "@type": "ImageObject" as const,
    "@id": `${SITE_URL}#logo`,
    url: logoUrl,
    contentUrl: logoUrl,
    name: LOGO_ALT,
    caption: LOGO_ALT,
  };
}

/** App publisher organization for structured data */
export function publisherOrganization() {
  return {
    "@type": "Organization" as const,
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: publisherLogoImageObject(),
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    ...publisherOrganization(),
  };
}

export function buildWebApplicationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/${locale}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    publisher: publisherOrganization(),
    inLanguage: locale === "ar" ? "ar" : "en",
  };
}

export function buildSoftwareApplicationSchema(locale: string) {
  const recommended = gameVersions.find((v) => v.recommended) ?? gameVersions[0];

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Android",
    softwareVersion: recommended.version,
    fileSize: recommended.size,
    publisher: publisherOrganization(),
    offers: gameVersions.map((v) => ({
      "@type": "Offer",
      name: `${v.name} ${v.version}`,
      description: v.features.join(". "),
    })),
    url: `${SITE_URL}/${locale}/versions`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: recommended.graphicsRating,
      bestRating: 10,
      worstRating: 1,
      ratingCount: 1,
    },
  };
}

/** Organization + WebApplication + SoftwareApplication on every page */
export function buildPagePublisherSchemas(locale: string) {
  return [
    buildOrganizationSchema(),
    buildWebApplicationSchema(locale),
    buildSoftwareApplicationSchema(locale),
  ];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqPageSchema(items: FaqItem[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl && { url: pageUrl }),
    publisher: publisherOrganization(),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function buildBreadcrumbListSchema(
  items: BreadcrumbItem[],
  pageUrl?: string
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        ...(pageUrl && { url: pageUrl }),
        publisher: publisherOrganization(),
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            ...(item.url && { item: item.url }),
          })),
        },
      },
    ],
  };
}

export type SchemaData = Record<string, unknown>;

export function combineSchemas(...schemas: SchemaData[]): SchemaData {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.flatMap((schema) => {
      if (Array.isArray(schema["@graph"])) {
        return schema["@graph"] as SchemaData[];
      }
      const { "@context": _context, ...rest } = schema;
      void _context;
      return [rest];
    }),
  };
}
