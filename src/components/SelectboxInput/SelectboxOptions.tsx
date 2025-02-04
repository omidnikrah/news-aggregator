import clsx from "clsx";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useSelectboxContext } from "./SelectboxContext";

export const SelectboxOptions = () => {
  const { isOpen, options, value, handleSelect } = useSelectboxContext();

  if (!isOpen) return null;

  return (
    <div
      className="shadow-navy-blue/20 absolute top-full z-120 w-full translate-y-2 overflow-hidden rounded-lg bg-white shadow-2xl"
      role="listbox"
    >
      <ul className="max-h-48 overflow-auto">
        {options.map(option => (
          <li
            key={option.value}
            className={clsx(
              "text-md text-navy-blue hover:bg-navy-blue/5 flex cursor-pointer items-center gap-2 p-3 capitalize transition-colors duration-500",
              {
                "bg-navy-blue/5": value.includes(option.value),
              },
            )}
            onClick={() => handleSelect(option)}
            role="option"
            aria-selected={value.includes(option.value)}
          >
            {value.includes(option.value) && <CheckCircleIcon width={20} height={20} />}
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
