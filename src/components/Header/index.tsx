export const Header = () => {
  return (
    <header className="my-20">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between max-xl:px-5 max-lg:flex-col max-lg:gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-red text-6xl font-bold">News Aggregator</h1>
          <span className="text-navy-blue text-2xl">
            Get the latest news from News API, The Guardian and The New York Times.
          </span>
        </div>
      </div>
    </header>
  );
};
