import axios from "axios";
import { newsApiAdapter, guardianAdapter, nytAdapter } from "./newsAdapter";
import { getGuardianFilters, getNewsApiFilters, getNytFilters } from "./filterAdapter";

const SOURCES = {
  newsapi: {
    url: "https://newsapi.org/v2/everything",
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
    apiKeyField: "apiKey",
    getFilters: getNewsApiFilters,
    adapter: newsApiAdapter,
    extraParams: { domains: "techcrunch.com" },
  },
  guardian: {
    url: "https://content.guardianapis.com/search",
    apiKey: import.meta.env.VITE_GUARDIAN_API_KEY,
    apiKeyField: "api-key",
    getFilters: getGuardianFilters,
    adapter: guardianAdapter,
    extraParams: { "show-fields": "thumbnail,trailText,byline" },
  },
  nyt: {
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    apiKey: import.meta.env.VITE_NYT_API_KEY,
    apiKeyField: "api-key",
    getFilters: getNytFilters,
    adapter: nytAdapter,
    extraParams: {},
  },
} as const;

const fetchFromSource = async (source: TSources, filters: NewsFilters = {}): Promise<Article[]> => {
  const config = SOURCES[source];
  if (!config) throw new Error(`Unknown source: ${source}`);

  const params = { ...config.getFilters(filters), ...config.extraParams, [config.apiKeyField]: config.apiKey };

  try {
    const response = await axios.get(config.url, { params });
    return config.adapter(response.data);
  } catch (error) {
    console.error(`Error fetching from ${source}:`, error);
    return [];
  }
};

export const fetchNewsFromSources = async (sources: TSources[], filters?: NewsFilters): Promise<Article[]> => {
  const results = await Promise.all(sources.map(source => fetchFromSource(source, filters)));
  return results
    .flat()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter(article => !filters?.authors?.length || (article.author && filters.authors.includes(article.author)));
};
