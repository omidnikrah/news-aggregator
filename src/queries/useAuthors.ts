import { useMemo } from "react";
import { useNews } from "@src/queries";

const DEFAULT_SOURCES: TSources[] = ["newsapi", "guardian", "nyt"];

export const useAuthors = (sources: TSources[] = DEFAULT_SOURCES) => {
  const { data: newsArticles } = useNews(sources, {});

  return useMemo(() => {
    if (!newsArticles) return [];
    return Array.from(new Set(newsArticles.map(article => article.author).filter(Boolean)));
  }, [newsArticles]);
};
