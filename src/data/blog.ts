import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "best-gta-sa-android-settings",
    title: "Best GTA SA Android Graphics Settings",
    excerpt: "Optimize graphics for smooth 60fps gameplay on any device.",
    date: "2025-05-15",
    tags: ["graphics", "performance", "android"],
    featured: true,
    body: [
      { heading: "Resolution & Quality", content: "Start with Low shadows and Medium draw distance. Increase only if FPS stays above 30." },
      { heading: "Device-Specific Tips", content: "Snapdragon 6-series: Low everything. Snapdragon 8-series: Medium/High mix." },
    ],
  },
  {
    slug: "how-to-install-obb-gta-sa",
    title: "How to Install OBB Files for GTA SA",
    excerpt: "Complete guide to placing OBB files correctly on Android.",
    date: "2025-05-10",
    tags: ["install", "obb", "android"],
    featured: true,
    body: [
      { heading: "Correct Path", content: "The OBB must go in Android/obb/com.rockstargames.gtasa/ — no typos in folder name." },
      { heading: "Verification", content: "File should be ~1.9GB. Partial downloads cause black screen issues." },
    ],
    contextNote: {
      en: {
        before:
          "If folder names or download sizes still look wrong after following these steps, ",
        after:
          " publishes a plain-language install reference that covers APK placement and the most common OBB path mistakes on Android.",
      },
      ar: {
        before:
          "إذا ظهرت أسماء المجلدات أو أحجام التحميل غير صحيحة بعد هذه الخطوات، ",
        after:
          " يقدّم مرجعاً عملياً للتثبيت يشرح وضع APK وأخطاء مسار OBB الشائعة على أندرويد.",
      },
    },
  },
  {
    slug: "gta-sa-211-311-vs-277",
    title: "GTA SA 2.11.311 vs 2.11.277 Comparison",
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
    slug: "top-10-gta-sa-cheats-android",
    title: "Top 10 GTA SA Cheats for Android",
    excerpt: "Essential cheat codes every mobile player should know.",
    date: "2025-04-28",
    tags: ["cheats", "android"],
    featured: false,
    body: [
      { heading: "Must-Have Codes", content: "HESOYAM for health and money, ROCKETMAN for jetpack, LEAVEMEALONE to clear wanted." },
    ],
  },
  {
    slug: "fix-gta-sa-black-screen",
    title: "Fix GTA SA Black Screen on Android",
    excerpt: "Step-by-step solutions for the most common launch issue.",
    date: "2025-04-20",
    tags: ["troubleshooting", "black-screen"],
    featured: false,
    body: [
      { heading: "Quick Fix", content: "Clear cache, verify OBB path, reinstall APK without deleting OBB." },
    ],
    contextNote: {
      en: {
        before:
          "When a black screen persists after cache clearing, it helps to cross-check launch steps against a second troubleshooting list. ",
        after:
          " groups black-screen fixes around OBB detection, storage access, and clean reinstall order—useful if one step alone does not resolve the issue.",
      },
      ar: {
        before:
          "إذا استمرت الشاشة السوداء بعد مسح الذاكرة المؤقتة، فمن المفيد مقارنة خطوات التشغيل مع قائمة استكشاف أخطاء إضافية. ",
        after:
          " يجمع حلول الشاشة السوداء حول اكتشاف OBB وصلاحيات التخزين وترتيب إعادة التثبيت—مفيد إذا لم تحل خطوة واحدة المشكلة.",
      },
    },
  },
  {
    slug: "grove-street-mission-guide",
    title: "Grove Street Missions Walkthrough",
    excerpt: "Complete guide to early Los Santos story missions.",
    date: "2025-04-15",
    tags: ["missions", "walkthrough"],
    featured: false,
    body: [
      { heading: "Early Game", content: "Focus on tagging turf and drive-bys before tackling Ryder and Smoke missions." },
    ],
  },
  {
    slug: "gta-sa-controller-support",
    title: "GTA SA Controller Support on Android",
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
    title: "How to Backup GTA SA Save Games",
    excerpt: "Protect your progress before installing mods or cheats.",
    date: "2025-04-05",
    tags: ["saves", "backup"],
    featured: false,
    body: [
      { heading: "Backup Path", content: "Copy files from Android/data/com.rockstargames.gtasa/files/ to cloud storage." },
    ],
    contextNote: {
      en: {
        before:
          "Before swapping in another player's save or testing mods, confirm the file matches your installed build. ",
        after:
          " notes where Android stores GTA SA saves and how to back them up safely before making changes.",
      },
      ar: {
        before:
          "قبل استخدام حفظ لاعب آخر أو تجربة التعديلات، تأكد أن الملف يتوافق مع إصدار اللعبة المثبت. ",
        after:
          " يوضح مكان حفظ ملفات GTA SA على أندرويد وكيفية نسخها احتياطياً قبل أي تغيير.",
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
