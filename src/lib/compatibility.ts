import type { CompatibilityResult, GraphicsSetting } from "@/types";

export function calculateCompatibility(
  androidVersion: number,
  ramGB: number,
  storageGB: number
): CompatibilityResult {
  const ramScore = Math.min(ramGB / 8, 1) * 40;
  const storageScore = Math.min(storageGB / 6, 1) * 30;
  const androidScore = Math.min((androidVersion - 7) / 7, 1) * 30;
  const score = Math.round(ramScore + storageScore + androidScore);

  let graphics: GraphicsSetting = "Low";
  let compatibleVersion = "GTA SA 2.11.277 (Lite)";
  let verdict = "Your device can run GTA San Andreas with reduced settings.";

  if (score >= 85) {
    graphics = "High";
    compatibleVersion = "GTA SA 2.11.311 (Recommended)";
    verdict = "Excellent! Your device is ideal for the latest GTA SA build.";
  } else if (score >= 60) {
    graphics = "Medium";
    compatibleVersion = "GTA SA 2.11.311";
    verdict = "Good fit. Use medium graphics for stable performance.";
  } else if (score >= 40) {
    graphics = "Low";
    compatibleVersion = "GTA SA 2.11.277";
    verdict = "Playable with low graphics. Close background apps.";
  } else {
    graphics = "Low";
    compatibleVersion = "Not recommended";
    verdict =
      "Your device may struggle. Consider upgrading RAM or freeing storage.";
  }

  if (ramGB < 3 || storageGB < 4 || androidVersion < 8) {
    compatibleVersion = "Not recommended";
    verdict =
      "Minimum requirements not met (Android 8+, 3GB RAM, 4GB free storage).";
    graphics = "Low";
  }

  return { compatibleVersion, graphics, score, verdict };
}
