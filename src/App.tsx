import { useNews } from "@src/queries";

const App = () => {
  const { data } = useNews(["nyt", "newsapi", "guardian"]);

  console.log(data);

  return <h1>Hello News Aggregator</h1>;
};

export default App;
