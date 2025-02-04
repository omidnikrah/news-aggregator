import { useNews } from "@src/queries";
import { Header } from "@src/components";

const App = () => {
  const { data } = useNews(["nyt", "newsapi", "guardian"]);

  console.log(data);

  return <Header />;
};

export default App;
