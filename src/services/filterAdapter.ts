import { CATEGORY_MAPPING } from "./categoryMapper";

type FilterParams = Record<string, string>;

export const getNewsApiFilters = (filters: NewsFilters): FilterParams => {
  const params: FilterParams = {};
  params.q = filters.query || "";
  if (filters.categories?.length) {
    const categories = filters.categories.map(cat => CATEGORY_MAPPING[cat]?.newsapi).filter(Boolean);
    if (categories.length) params.category = categories.join(",");
  }
  if (filters.fromDate) params.from = filters.fromDate;
  if (filters.toDate) params.to = filters.toDate;
  return params;
};

export const getGuardianFilters = (filters: NewsFilters): FilterParams => {
  const params: FilterParams = {};
  if (filters.query) params.q = filters.query;
  if (filters.categories?.length) {
    const categories = filters.categories.map(cat => CATEGORY_MAPPING[cat]?.guardian).filter(Boolean);
    if (categories.length) params.section = categories.join("|");
  }
  if (filters.fromDate) params["from-date"] = filters.fromDate;
  if (filters.toDate) params["to-date"] = filters.toDate;
  return params;
};

export const getNytFilters = (filters: NewsFilters): FilterParams => {
  const params: FilterParams = {};
  if (filters.query) params.q = filters.query;
  if (filters.categories?.length) {
    const categories = filters.categories.map(cat => CATEGORY_MAPPING[cat]?.nyt).filter(Boolean);
    if (categories.length) params.fq = `news_desk:(${categories.map(c => `"${c}"`).join(" OR ")})`;
  }
  if (filters.fromDate) params.begin_date = filters.fromDate.replace(/-/g, "");
  if (filters.toDate) params.end_date = filters.toDate.replace(/-/g, "");
  return params;
};
