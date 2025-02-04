import { useNews } from "@src/queries";
import { Filters } from "@src/components";
import { useFiltersStore } from "@src/store";

const Home = () => {
  const { filters } = useFiltersStore();
  const { data } = useNews(filters.sources, filters);

  console.log(data);

  return <Filters />;
};

export default Home;
