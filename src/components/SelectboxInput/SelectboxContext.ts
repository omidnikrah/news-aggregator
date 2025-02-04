import { createContext, useContext } from "react";
import { Option } from "./selectboxTypes";

interface SelectboxContextProps {
  isOpen: boolean;
  value: string[];
  options: Option[];
  handleToggle: () => void;
  handleSelect: (option: Option) => void;
  handleRemove: (optionValue: string) => void;
}

export const SelectboxContext = createContext<SelectboxContextProps | undefined>(undefined);

export const useSelectboxContext = (): SelectboxContextProps => {
  const context = useContext(SelectboxContext);
  if (!context) {
    throw new Error("Selectbox components must be used within a Selectbox.Root");
  }
  return context;
};
