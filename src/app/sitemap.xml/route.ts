import { getSitemapEntries, buildSitemapXml } from "@/lib/sitemap-xml";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const xml = buildSitemapXml(getSitemapEntries());

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
