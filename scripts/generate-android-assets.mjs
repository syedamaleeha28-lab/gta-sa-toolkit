import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assetsDir = path.join(root, "assets");
const iconSource = path.join(root, "src", "app", "icon.png");

fs.mkdirSync(assetsDir, { recursive: true });
fs.copyFileSync(iconSource, path.join(assetsDir, "icon.png"));
fs.copyFileSync(iconSource, path.join(assetsDir, "splash.png"));

console.log("Copied icon assets to assets/ — run npm run cap:assets to generate platform resources.");
