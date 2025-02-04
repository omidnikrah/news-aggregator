import { ReactNode, useState } from "react";
import { useClickOutside } from "@src/hooks";
import { SelectboxContext } from "./SelectboxContext";
import { Option } from "./selectboxTypes";

interface ISelectboxRootProps {
  id: string;
  label: string;
  options: Option[];
  value: string[];
  onChange: (selectedValues: string[]) => void;
  placeholder?: string;
  children: ReactNode;
}

export const SelectboxRoot = ({ options, value, onChange, label, children }: ISelectboxRootProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectboxRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleToggle = () => setIsOpen(prev => !prev);

  const handleSelect = (option: Option) => {
    const newSelectedValues = value.includes(option.value)
      ? value.filter(val => val !== option.value)
      : [...value, option.value];
    onChange?.(newSelectedValues);
  };

  const handleRemove = (optionValue: Option["value"]) => {
    onChange?.(value.filter(val => val !== optionValue));
  };

  return (
    <SelectboxContext.Provider value={{ isOpen, value, options, handleToggle, handleSelect, handleRemove }}>
      <div className="relative flex flex-1 flex-col gap-2" ref={selectboxRef}>
        <label className="text-navy-blue text-md">{label}</label>
        {children}
      </div>
    </SelectboxContext.Provider>
  );
};
