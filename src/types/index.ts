export type CheatCategory =
  | "weapons"
  | "vehicles"
  | "police"
  | "health"
  | "fun"
  | "weather"
  | "all";

export interface Cheat {
  id: string;
  name: string;
  code: string;
  category: Exclude<CheatCategory, "all">;
  platform: string;
  description: string;
}

export interface Mission {
  id: string;
  title: string;
  region: string;
  difficulty: "easy" | "medium" | "hard";
  tips: string[];
  walkthrough: string;
}

export interface GameVersion {
  id: string;
  name: string;
  version: string;
  size: string;
  features: string[];
  androidMin: string;
  graphicsRating: number;
  recommended?: boolean;
}

export type SaveCategory = "100-percent" | "mission-unlock" | "beginner";

export interface SaveGame {
  id: string;
  title: string;
  category: SaveCategory;
  description: string;
  requirements: string[];
  tags: string[];
}

export interface TroubleshootingIssue {
  id: string;
  title: string;
  slug: string;
  summary: string;
  steps: string[];
}

export interface WizardStep {
  id: string;
  title: string;
  description: string;
  minAndroid: number;
}

export interface WizardError {
  id: string;
  title: string;
  solution: string;
}

export interface WizardFaq {
  id: string;
  question: string;
  answer: string;
}

export interface BlogContextNote {
  en: { before: string; after: string };
  ar: { before: string; after: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured: boolean;
  body: { heading: string; content: string }[];
  contextNote?: BlogContextNote;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface FavoritesState {
  cheats: string[];
  guides: string[];
}

export interface AnalyticsState {
  cheatViews: Record<string, number>;
  copyCounts: Record<string, number>;
  categoryViews: Record<string, number>;
}

export type GraphicsSetting = "Low" | "Medium" | "High";

export interface CompatibilityResult {
  compatibleVersion: string;
  graphics: GraphicsSetting;
  score: number;
  verdict: string;
}
