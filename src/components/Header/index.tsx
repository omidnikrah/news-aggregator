import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@src/constants";
import clsx from "clsx";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="my-20">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between max-xl:px-5 max-lg:flex-col max-lg:gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-red text-6xl font-bold">News Aggregator</h1>
          <span className="text-navy-blue text-2xl">
            Get the latest news from News API, The Guardian and The New York Times.
          </span>
        </div>
        <div className="flex gap-3">
          <Link
            to={ROUTES.HOME}
            className={clsx(
              "text-navy-blue/70 hover:!text-navy-blue relative flex items-center justify-center rounded-md px-4 py-2 transition-colors",
              {
                "!text-navy-blue after:bg-navy-blue after:absolute after:bottom-0 after:h-1 after:w-4 after:rounded-full":
                  pathname === ROUTES.HOME,
              },
            )}
          >
            Feed
          </Link>
          <Link
            to={ROUTES.PREFERENCES}
            className={clsx(
              "text-navy-blue/70 hover:!text-navy-blue relative flex items-center justify-center rounded-md px-4 py-2 transition-colors",
              {
                "!text-navy-blue after:bg-navy-blue after:absolute after:bottom-0 after:h-1 after:w-4 after:rounded-full":
                  pathname === ROUTES.PREFERENCES,
              },
            )}
          >
            Preferences
          </Link>
        </div>
      </div>
    </header>
  );
};
