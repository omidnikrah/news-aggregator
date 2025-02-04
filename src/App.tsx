import { useNews } from "@src/queries";
import { Filters, Header } from "@src/components";

const App = () => {
  const { data } = useNews(["nyt", "newsapi", "guardian"]);

  console.log(data);

  return (
    <div>
      <Header />
      <Filters />
    </div>
  );
};

export default App;
