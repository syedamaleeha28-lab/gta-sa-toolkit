import type { FavoritesState } from "@/types";
import { safeParseJSON } from "./storage";

export const FAVORITES_KEY = "gta-toolkit-favorites";

export const defaultFavorites: FavoritesState = {
  cheats: [],
  guides: [],
};

export function loadFavorites(): FavoritesState {
  if (typeof window === "undefined") return defaultFavorites;
  return safeParseJSON(
    localStorage.getItem(FAVORITES_KEY),
    defaultFavorites
  );
}

export function saveFavorites(state: FavoritesState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(state));
}
