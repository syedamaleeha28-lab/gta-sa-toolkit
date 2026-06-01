import { JsonLd } from "@/components/seo/JsonLd";
import { buildPagePublisherSchemas } from "@/lib/schema";

interface PublisherJsonLdProps {
  locale: string;
}

/**
 * Injects Organization, WebApplication, and SoftwareApplication JSON-LD
 * with toolkit and partner publisher metadata on every page.
 */
export function PublisherJsonLd({ locale }: PublisherJsonLdProps) {
  return <JsonLd data={buildPagePublisherSchemas(locale)} />;
}
