import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assetsDir = path.join(root, "assets");
const iconCandidates = [
  path.join(assetsDir, "icon.png"),
  path.join(root, "src", "app", "icon.png"),
];
const iconSource = iconCandidates.find((p) => fs.existsSync(p));
if (!iconSource) {
  console.error(
    "Missing icon source. Place icon.png in assets/ or src/app/icon.png before running cap:assets.",
  );
  process.exit(1);
}

fs.mkdirSync(assetsDir, { recursive: true });
if (iconSource !== path.join(assetsDir, "icon.png")) {
  fs.copyFileSync(iconSource, path.join(assetsDir, "icon.png"));
}
fs.copyFileSync(path.join(assetsDir, "icon.png"), path.join(assetsDir, "splash.png"));

console.log("Copied icon assets to assets/ — run npm run cap:assets to generate platform resources.");
