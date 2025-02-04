import { create } from "zustand";
import { usePreferencesStore } from "./usePreferencesStore";

type Filters = {
  query: string;
  categories: string[];
  sources: TSources[];
  authors: string[];
  fromDate: string | undefined;
  toDate: string | undefined;
};

type FiltersState = {
  filters: Filters;
  setFilter: (field: keyof Filters, value: Filters[keyof Filters]) => void;
  initializeFilters: () => void;
};

export const useFiltersStore = create<FiltersState>(set => ({
  filters: {
    query: "",
    categories: [],
    sources: [],
    authors: [],
    fromDate: undefined,
    toDate: undefined,
  },

  setFilter: (field, value) =>
    set(state => ({
      filters: { ...state.filters, [field]: value },
    })),

  initializeFilters: () => {
    const preferences = usePreferencesStore.getState().preferences;
    set({
      filters: {
        query: "",
        categories: preferences.categories,
        sources: preferences.sources,
        authors: preferences.authors,
        fromDate: undefined,
        toDate: undefined,
      },
    });
  },
}));

usePreferencesStore.persist.rehydrate()?.then(() => {
  useFiltersStore.getState().initializeFilters();
});

usePreferencesStore.subscribe(state => {
  useFiltersStore.setState(prev => ({
    filters: {
      ...prev.filters,
      sources: state.preferences.sources,
      categories: state.preferences.categories,
      authors: state.preferences.authors,
    },
  }));
});
