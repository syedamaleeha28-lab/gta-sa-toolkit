import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "best-android-graphics-settings",
    title: "Best Android Graphics Settings",
    excerpt: "Optimize graphics for smooth gameplay on any device.",
    date: "2025-05-15",
    tags: ["graphics", "performance", "android"],
    featured: true,
    body: [
      { heading: "Resolution & Quality", content: "Start with Low shadows and Medium draw distance. Increase only if FPS stays above 30." },
      { heading: "Device-Specific Tips", content: "Snapdragon 6-series: Low everything. Snapdragon 8-series: Medium/High mix." },
    ],
  },
  {
    slug: "how-to-install-obb-android",
    title: "How to Install OBB Files on Android",
    excerpt: "Complete guide to placing OBB files correctly on Android.",
    date: "2025-05-10",
    tags: ["install", "obb", "android"],
    featured: true,
    body: [
      { heading: "Correct Path", content: "Place the OBB in Android/obb under your installed app's package folder — no typos in folder name." },
      { heading: "Verification", content: "File should be ~1.9GB. Partial downloads cause black screen issues." },
    ],
    contextNote: {
      en: {
        before: "If folder names or download sizes still look wrong, review the ",
        after: " install wizard in this app for APK placement and common OBB path mistakes.",
      },
      ar: {
        before: "إذا ظهرت أسماء المجلدات أو أحجام التحميل غير صحيحة، راجع ",
        after: " معالج التثبيت في التطبيق لوضع APK وأخطاء مسار OBB الشائعة.",
      },
    },
  },
  {
    slug: "android-build-311-vs-277",
    title: "Build 2.11.311 vs 2.11.277 Comparison",
    excerpt: "Which version is right for your Android phone?",
    date: "2025-05-05",
    tags: ["versions", "comparison"],
    featured: false,
    body: [
      { heading: "2.11.311", content: "Best for Android 10+ with 4GB+ RAM. Latest fixes and features." },
      { heading: "2.11.277", content: "Ideal for older devices. Smaller footprint, fewer background processes." },
    ],
  },
  {
    slug: "top-10-game-tips-android",
    title: "Top 10 Game Tips for Android",
    excerpt: "Essential reference codes every mobile player should know.",
    date: "2025-04-28",
    tags: ["tips", "android"],
    featured: false,
    body: [
      { heading: "Must-Have Codes", content: "Browse the in-app Game Tips section for health, vehicles, and wanted-level references." },
    ],
  },
  {
    slug: "fix-black-screen-android",
    title: "Fix Black Screen on Android",
    excerpt: "Step-by-step solutions for the most common launch issue.",
    date: "2025-04-20",
    tags: ["troubleshooting", "black-screen"],
    featured: false,
    body: [
      { heading: "Quick Fix", content: "Clear cache, verify OBB path, reinstall APK without deleting OBB." },
    ],
    contextNote: {
      en: {
        before: "When a black screen persists after cache clearing, cross-check steps in the ",
        after: " troubleshooting center for OBB detection, storage access, and reinstall order.",
      },
      ar: {
        before: "إذا استمرت الشاشة السوداء بعد مسح الذاكرة المؤقتة، راجع ",
        after: " مركز استكشاف الأخطاء لاكتشاف OBB وصلاحيات التخزين وترتيب إعادة التثبيت.",
      },
    },
  },
  {
    slug: "early-story-mission-walkthrough",
    title: "Early Story Missions Walkthrough",
    excerpt: "Complete guide to opening story missions.",
    date: "2025-04-15",
    tags: ["missions", "walkthrough"],
    featured: false,
    body: [
      { heading: "Early Game", content: "Focus on territory missions and drive-bys before advancing the main storyline." },
    ],
  },
  {
    slug: "controller-support-android",
    title: "Controller Support on Android",
    excerpt: "Connect Bluetooth controllers for the best experience.",
    date: "2025-04-10",
    tags: ["controller", "android"],
    featured: false,
    body: [
      { heading: "Setup", content: "Pair via Bluetooth, enable controller in game settings. Xbox and PlayStation controllers work." },
    ],
  },
  {
    slug: "save-game-backup-guide",
    title: "How to Backup Save Games",
    excerpt: "Protect your progress before installing mods or testing tips.",
    date: "2025-04-05",
    tags: ["saves", "backup"],
    featured: false,
    body: [
      { heading: "Backup Path", content: "Copy save files from your app's Android/data folder to cloud storage." },
    ],
    contextNote: {
      en: {
        before: "Before swapping saves or testing mods, confirm files match your installed build. ",
        after: " explains where Android stores saves and how to back them up safely.",
      },
      ar: {
        before: "قبل استبدال ملفات الحفظ أو تجربة التعديلات، تأكد من توافق الملفات مع إصدارك. ",
        after: " يشرح مكان حفظ الملفات على أندرويد وكيفية النسخ الاحتياطي.",
      },
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, tags: string[], limit = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== slug && p.tags.some((t) => tags.includes(t)))
    .slice(0, limit);
}
