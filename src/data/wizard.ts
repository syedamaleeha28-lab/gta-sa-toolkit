import type { WizardStep, WizardError, WizardFaq } from "@/types";

export const wizardSteps: WizardStep[] = [
  {
    id: "step1",
    title: "Download APK & OBB",
    description:
      "Download the GTA SA APK and the main OBB file from a trusted source. Verify file sizes: APK ~40MB, OBB ~1.9GB.",
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
      "Open the downloaded APK and tap Install. Wait for completion. Do not open the game yet.",
    minAndroid: 8,
  },
  {
    id: "step4",
    title: "Place OBB Files",
    description:
      "Create folder: Android/obb/com.rockstargames.gtasa/ and move main.8.com.rockstargames.gtasa.obb inside.",
    minAndroid: 8,
  },
  {
    id: "step5",
    title: "Verify & Launch",
    description:
      "Confirm OBB path is correct. Launch GTA SA. Download additional data if prompted on first run.",
    minAndroid: 8,
  },
  {
    id: "step6",
    title: "Legacy: Android 7–8",
    description:
      "On Android 7–8, use a file manager with root-free OBB access (e.g. ZArchiver). Same OBB path applies.",
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
      "Ensure OBB is in Android/obb/com.rockstargames.gtasa/ with exact filename. No extra subfolders.",
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
      "Install the licensed game from Google Play, or use a clean APK build with valid license verification.",
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
