import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  OG_IMAGE,
  LOGO_WIDTH,
  LOGO_HEIGHT,
  LOGO_ALT,
} from "./constants";

type PageMetaOptions = {
  title: string;
  description?: string;
  path?: string;
  locale?: string;
};

export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  locale = "en",
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en${path}`,
        ar: `${SITE_URL}/ar${path}`,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}${OG_IMAGE}`,
          width: LOGO_WIDTH,
          height: LOGO_HEIGHT,
          alt: LOGO_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [`${SITE_URL}${OG_IMAGE}`],
    },
  };
}
