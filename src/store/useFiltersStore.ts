import { create } from "zustand";

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
}));
