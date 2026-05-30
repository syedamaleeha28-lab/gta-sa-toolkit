import { writeFileSync } from "fs";
import { join } from "path";
import { buildSitemapXml, getSitemapEntries } from "../src/lib/sitemap-xml";

const outPath = join(process.cwd(), "public", "sitemap.xml");
const entries = getSitemapEntries();
const xml = buildSitemapXml(entries);

writeFileSync(outPath, xml, { encoding: "utf8" });
console.log(`Generated ${outPath} (${entries.length} URLs)`);
