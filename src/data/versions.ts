import type { GameVersion } from "@/types";

export const gameVersions: GameVersion[] = [
  {
    id: "sa-311",
    name: "GTA San Andreas",
    version: "2.11.311",
    size: "2.4 GB (APK + OBB)",
    features: [
      "Latest bug fixes",
      "Improved touch controls",
      "Cloud save support",
      "Enhanced graphics options",
      "Controller support",
    ],
    androidMin: "Android 8.0+",
    graphicsRating: 9,
    recommended: true,
  },
  {
    id: "sa-277",
    name: "GTA San Andreas",
    version: "2.11.277",
    size: "2.1 GB (APK + OBB)",
    features: [
      "Stable on older devices",
      "Lower RAM usage",
      "Classic control layout",
      "Fewer background services",
    ],
    androidMin: "Android 7.0+",
    graphicsRating: 7,
  },
  {
    id: "vc",
    name: "GTA Vice City",
    version: "1.12",
    size: "1.2 GB (APK + OBB)",
    features: [
      "80s Miami storyline",
      "Smaller map size",
      "Lighter performance footprint",
      "Unique radio stations",
    ],
    androidMin: "Android 7.0+",
    graphicsRating: 8,
  },
];
