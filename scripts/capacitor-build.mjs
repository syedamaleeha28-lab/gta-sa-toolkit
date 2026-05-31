import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const middlewarePath = path.join(root, "src", "middleware.ts");
const middlewareBackup = `${middlewarePath}.capacitor-bak`;

function run(command) {
  execSync(command, { cwd: root, stdio: "inherit", env: process.env });
}

function backupMiddleware() {
  if (fs.existsSync(middlewarePath)) {
    fs.renameSync(middlewarePath, middlewareBackup);
    console.log("Backed up middleware for static export build.");
  }
}

function restoreMiddleware() {
  if (fs.existsSync(middlewareBackup)) {
    if (fs.existsSync(middlewarePath)) {
      fs.unlinkSync(middlewarePath);
    }
    fs.renameSync(middlewareBackup, middlewarePath);
    console.log("Restored middleware.");
  }
}

try {
  backupMiddleware();
  process.env.CAPACITOR_BUILD = "true";
  run("npx next build");

  const androidDir = path.join(root, "android");
  const gradlew = path.join(androidDir, "gradlew.bat");
  if (!fs.existsSync(gradlew)) {
    if (fs.existsSync(androidDir)) {
      fs.rmSync(androidDir, { recursive: true, force: true });
    }
    run("npx cap add android");
  }

  run("npx cap sync android");
} finally {
  restoreMiddleware();
}
