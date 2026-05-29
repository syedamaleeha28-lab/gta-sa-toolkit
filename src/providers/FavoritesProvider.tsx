"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { FavoritesState } from "@/types";
import {
  defaultFavorites,
  loadFavorites,
  saveFavorites,
} from "@/lib/favorites";

interface FavoritesContextValue {
  favorites: FavoritesState;
  toggleCheat: (id: string) => void;
  toggleGuide: (id: string) => void;
  isFavoriteCheat: (id: string) => boolean;
  isFavoriteGuide: (id: string) => boolean;
  clearAll: () => void;
  hydrated: boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoritesState>(defaultFavorites);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavorites(loadFavorites());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveFavorites(favorites);
  }, [favorites, hydrated]);

  const toggleCheat = useCallback((id: string) => {
    setFavorites((prev) => {
      const cheats = prev.cheats.includes(id)
        ? prev.cheats.filter((c) => c !== id)
        : [...prev.cheats, id];
      return { ...prev, cheats };
    });
  }, []);

  const toggleGuide = useCallback((id: string) => {
    setFavorites((prev) => {
      const guides = prev.guides.includes(id)
        ? prev.guides.filter((g) => g !== id)
        : [...prev.guides, id];
      return { ...prev, guides };
    });
  }, []);

  const clearAll = useCallback(() => {
    setFavorites(defaultFavorites);
  }, []);

  const isFavoriteCheat = useCallback(
    (id: string) => favorites.cheats.includes(id),
    [favorites.cheats]
  );

  const isFavoriteGuide = useCallback(
    (id: string) => favorites.guides.includes(id),
    [favorites.guides]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleCheat,
        toggleGuide,
        isFavoriteCheat,
        isFavoriteGuide,
        clearAll,
        hydrated,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
