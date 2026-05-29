import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildWebApplicationSchema,
  buildSoftwareApplicationSchema,
  type SchemaData,
} from "@/lib/schema";

interface SiteSchemasProps {
  locale: string;
  includeSoftwareApplication?: boolean;
}

export function SiteSchemas({
  locale,
  includeSoftwareApplication = false,
}: SiteSchemasProps) {
  const schemas: SchemaData[] = [buildWebApplicationSchema(locale)];

  if (includeSoftwareApplication) {
    schemas.push(buildSoftwareApplicationSchema(locale));
  }

  return <JsonLd data={schemas} />;
}
