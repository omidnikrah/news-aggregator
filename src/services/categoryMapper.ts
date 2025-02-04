export const CATEGORY_MAPPING: Record<string, { newsapi?: string; guardian?: string; nyt?: string }> = {
  technology: { newsapi: "technology", guardian: "technology", nyt: "Technology" },
  business: { newsapi: "business", guardian: "business", nyt: "Business" },
  sports: { newsapi: "sports", guardian: "sport", nyt: "Sports" },
  health: { newsapi: "health", guardian: "health", nyt: "Health" },
  entertainment: { newsapi: "entertainment", guardian: "culture", nyt: "Movies" },
  science: { newsapi: "science", guardian: "science", nyt: "Science" },
  general: { newsapi: "general", guardian: "news", nyt: "General" },
};
