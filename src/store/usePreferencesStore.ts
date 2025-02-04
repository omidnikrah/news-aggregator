import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Preferences {
  sources: TSources[];
  categories: string[];
  authors: string[];
}

interface PreferencesState {
  preferences: Preferences;

  setPreferences: (field: keyof Preferences, value: Preferences[keyof Preferences]) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    set => ({
      preferences: {
        sources: ["newsapi", "guardian", "nyt"],
        categories: [],
        authors: [],
      },

      setPreferences: (field, value) =>
        set(state => ({
          preferences: { ...state.preferences, [field]: value },
        })),
    }),
    {
      name: "news-preferences",
    },
  ),
);
