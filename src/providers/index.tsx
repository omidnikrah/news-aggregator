import { ReactNode } from "react";
import { ReactQueryProvider } from "./ReactQueryProvider";

interface IAppProviders {
  children: ReactNode;
}

export const AppProviders = ({ children }: IAppProviders) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
