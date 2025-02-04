import { useQuery } from "@tanstack/react-query";
import { newsService } from "@src/services";
import { useDebounce } from "@src/hooks";

export const useNews = (sources: TSources[], filters?: NewsFilters) => {
  const selectedSources: TSources[] = sources.length > 0 ? sources : ["nyt", "guardian", "newsapi"];

  const debouncedFilters = useDebounce(filters, 300);

  return useQuery<Article[]>({
    queryKey: ["news", selectedSources, debouncedFilters],
    queryFn: () => newsService.fetchNewsFromSources(selectedSources, debouncedFilters),
  });
};
