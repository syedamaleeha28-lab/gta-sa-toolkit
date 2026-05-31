#!/usr/bin/env node
/**
 * Creates a release keystore for Google Play signing.
 * Run once: npm run android:keystore
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const keystorePath = path.join(root, "release.keystore");

if (fs.existsSync(keystorePath)) {
  console.error("release.keystore already exists. Delete it first if you need a new one.");
  process.exit(1);
}

const dname =
  "CN=GTA SA Toolkit, OU=Mobile, O=GTASanad, L=Unknown, ST=Unknown, C=US";

execSync(
  `keytool -genkeypair -v -storetype PKCS12 -keystore "${keystorePath}" -alias gta-sa-toolkit -keyalg RSA -keysize 2048 -validity 10000 -storepass changeit -keypass changeit -dname "${dname}"`,
  { stdio: "inherit", cwd: root },
);

console.log(`
Created release.keystore (default passwords: changeit).

Next steps:
1. Copy android-keystore.properties.example to android/keystore.properties
2. Set storePassword and keyPassword in keystore.properties
3. npm run build:android
4. npm run android:bundle
`);
