import { useQuery } from "@tanstack/react-query";
import { newsService } from "@src/services";

export const useNews = (sources: TSources[]) => {
  const selectedSources: TSources[] = sources.length > 0 ? sources : ["nyt", "guardian", "newsapi"];

  return useQuery<Article[]>({
    queryKey: ["news", selectedSources],
    queryFn: () => newsService.fetchNewsFromSources(selectedSources),
  });
};
