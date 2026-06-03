import type { TroubleshootingIssue } from "@/types";

export const troubleshootingIssues: TroubleshootingIssue[] = [
  {
    id: "ts1",
    title: "Black Screen on Launch",
    slug: "black-screen",
    summary: "App opens but shows a black screen instead of the menu.",
    steps: [
      "Clear the game app cache and data from Android Settings.",
      "Verify OBB files are in the correct Android/obb folder (not in a subfolder).",
      "Re-download OBB if file size doesn't match (~1.9GB for main expansion).",
      "Disable battery optimization for the game.",
      "Try the older 2.11.277 build if on a low-RAM device.",
    ],
  },
  {
    id: "ts2",
    title: "OBB Not Detected",
    slug: "obb-not-detected",
    summary: "Installer or game says OBB files are missing.",
    steps: [
      "Use a file manager to confirm path under Android/obb for your app package.",
      "OBB filename must match exactly what your build requires.",
      "Do not rename or extract the OBB file.",
      "Grant storage permission to your file manager and the game.",
      "If copied via USB, ensure transfer completed (check file size).",
    ],
  },
  {
    id: "ts3",
    title: "App Not Installed",
    slug: "app-not-installed",
    summary: "APK installation fails with 'App not installed' error.",
    steps: [
      "Uninstall any existing duplicate install first.",
      "Enable 'Install unknown apps' for your browser or file manager.",
      "Ensure you have 3GB+ free storage (APK + OBB + install buffer).",
      "Download APK from a trusted source matching your CPU (ARM64 vs ARMv7).",
      "Restart device and try installing again.",
    ],
  },
  {
    id: "ts4",
    title: "Game Crashing",
    slug: "crashing",
    summary: "Game closes unexpectedly during gameplay or loading.",
    steps: [
      "Close background apps to free RAM (need 3GB+ available).",
      "Lower graphics settings in game menu.",
      "Update to latest 2.11.311 patch if on an older build.",
      "Avoid using codes during mission cutscenes.",
      "Clear cache without deleting OBB, then relaunch.",
    ],
  },
  {
    id: "ts5",
    title: "Lag and Low FPS",
    slug: "lag",
    summary: "Stuttering, frame drops, or slow gameplay.",
    steps: [
      "Set graphics to Low and disable shadows.",
      "Use 2.11.277 lite version for weaker devices.",
      "Enable performance mode in Android developer options.",
      "Play with device plugged in and thermals managed.",
      "Reduce resolution via Android game mode if available.",
    ],
  },
];
