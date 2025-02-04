import { useNews } from "@src/queries";
import { Filters, NewsList } from "@src/components";
import { useFiltersStore } from "@src/store";

const Home = () => {
  const { filters } = useFiltersStore();
  const { data, isLoading } = useNews(filters.sources, filters);

  return (
    <>
      <Filters />
      <NewsList list={data} loading={isLoading} />
    </>
  );
};

export default Home;
