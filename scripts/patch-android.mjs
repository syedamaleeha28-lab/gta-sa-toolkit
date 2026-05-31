import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const androidDir = path.join(root, "android");

if (!fs.existsSync(androidDir)) {
  console.error("android/ not found. Run npm run build:android first.");
  process.exit(1);
}

const variablesGradle = path.join(androidDir, "variables.gradle");
if (fs.existsSync(variablesGradle)) {
  let content = fs.readFileSync(variablesGradle, "utf8");
  content = content.replace(
    /minSdkVersion\s*=\s*\d+/,
    "minSdkVersion = 29",
  );
  fs.writeFileSync(variablesGradle, content);
  console.log("Set minSdkVersion to 29 (Android 10+).");
}

const appBuildGradle = path.join(androidDir, "app", "build.gradle");
if (fs.existsSync(appBuildGradle)) {
  let gradle = fs.readFileSync(appBuildGradle, "utf8");

  if (!gradle.includes("keystorePropertiesFile")) {
    const signingBlock = `
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
`;

    gradle = gradle.replace(
      "android {",
      `${signingBlock}
android {`,
    );

    if (!gradle.includes("signingConfigs {")) {
      gradle = gradle.replace(
        "    buildTypes {",
        `    signingConfigs {
        release {
            if (keystorePropertiesFile.exists()) {
                storeFile file(keystoreProperties['storeFile'])
                storePassword keystoreProperties['storePassword']
                keyAlias keystoreProperties['keyAlias']
                keyPassword keystoreProperties['keyPassword']
            }
        }
    }
    buildTypes {`,
      );
    }

    gradle = gradle.replace(
      /release\s*\{\s*\n\s*minifyEnabled false/,
      `release {
            signingConfig signingConfigs.release
            minifyEnabled false`,
    );

    fs.writeFileSync(appBuildGradle, gradle);
    console.log("Configured release signing in app/build.gradle.");
  }
}

const keystoreExample = path.join(androidDir, "keystore.properties.example");
if (!fs.existsSync(keystoreExample)) {
  fs.copyFileSync(
    path.join(root, "android-keystore.properties.example"),
    keystoreExample,
  );
}

console.log("Android project patched.");
