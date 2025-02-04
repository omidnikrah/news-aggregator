import { NewsCard, SpinnerLoading } from "..";
import { NewspaperIcon } from "@heroicons/react/24/outline";

interface INewsListProps {
  list: Article[] | undefined;
  loading: boolean;
}

export const NewsList = ({ list = [], loading }: INewsListProps) => {
  return (
    <div className="mx-auto mt-10 max-w-7xl max-xl:mx-5">
      {loading && (
        <div className="my-10 flex items-center justify-center">
          <SpinnerLoading />
        </div>
      )}
      {!loading && !list?.length && (
        <div className="text-navy-blue flex flex-col items-center justify-center gap-2">
          <NewspaperIcon width={80} height={80} />
          <span className="text-lg font-bold">No news found!</span>
        </div>
      )}
      <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2">
        {list.map(article => (
          <NewsCard
            key={article.url}
            imageUrl={article.imageUrl}
            source={article.source}
            title={article.title}
            description={article.description}
            category={article.category}
            publishedAt={article.publishedAt}
            author={article.author}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
};
