import type { WizardStep, WizardError, WizardFaq } from "@/types";

export const wizardSteps: WizardStep[] = [
  {
    id: "step1",
    title: "Download APK & OBB",
    description:
      "Download the game APK and main OBB expansion from a trusted source. Verify file sizes: APK ~40MB, OBB ~1.9GB.",
    minAndroid: 8,
  },
  {
    id: "step2",
    title: "Enable Unknown Sources",
    description:
      "Go to Settings → Apps → Special access → Install unknown apps. Enable for your browser or file manager.",
    minAndroid: 8,
  },
  {
    id: "step3",
    title: "Install the APK",
    description:
      "Open the downloaded APK and tap Install. Wait for completion. Do not open the app yet.",
    minAndroid: 8,
  },
  {
    id: "step4",
    title: "Place OBB Files",
    description:
      "Create the OBB folder under Android/obb using your installed app's package name (shown in Settings → Apps). Place the expansion .obb file inside with the exact filename required by your build.",
    minAndroid: 8,
  },
  {
    id: "step5",
    title: "Verify & Launch",
    description:
      "Confirm the OBB path is correct. Launch the game. Download additional data if prompted on first run.",
    minAndroid: 8,
  },
  {
    id: "step6",
    title: "Legacy: Android 7–8",
    description:
      "On Android 7–8, use a file manager with OBB access (e.g. ZArchiver). The same OBB folder rules apply.",
    minAndroid: 7,
  },
  {
    id: "step7",
    title: "Android 13–14 Permissions",
    description:
      "On Android 13+, grant notification and storage permissions when prompted. Use scoped storage compatible file managers.",
    minAndroid: 13,
  },
];

export const wizardErrors: WizardError[] = [
  {
    id: "e1",
    title: "OBB not found",
    solution:
      "Ensure the OBB file is in the correct Android/obb folder for your app package. No extra subfolders. Filename must match exactly.",
  },
  {
    id: "e2",
    title: "Download failed",
    solution:
      "Use stable Wi-Fi. Resume download. Check you have 3GB+ free space before starting.",
  },
  {
    id: "e3",
    title: "License verification failed",
    solution:
      "Install the licensed app from an official app store, or use a clean APK build with valid license verification.",
  },
  {
    id: "e4",
    title: "Graphics glitch",
    solution:
      "Clear cache, reinstall OBB, set graphics to Low in game settings.",
  },
];

export const wizardFaqs: WizardFaq[] = [
  {
    id: "f1",
    question: "Do I need to extract the OBB?",
    answer: "No. The OBB must remain as a single .obb file, not extracted.",
  },
  {
    id: "f2",
    question: "Can I move OBB to SD card?",
    answer: "Yes on many devices: move the entire obb folder to SD card using a file manager with adoptable storage support.",
  },
  {
    id: "f3",
    question: "Which version should I install?",
    answer: "2.11.311 for modern devices (Android 10+). 2.11.277 for older or low-RAM phones.",
  },
];

export function getStepsForAndroid(version: number): WizardStep[] {
  return wizardSteps.filter((s) => s.minAndroid <= version);
}
