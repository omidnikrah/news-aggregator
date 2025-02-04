import clsx from "clsx";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelectboxContext } from "./SelectboxContext";

interface ISelectboxTriggerProps {
  placeholder?: string;
}

export const SelectboxTrigger = ({ placeholder }: ISelectboxTriggerProps) => {
  const { value, options, isOpen, handleToggle, handleRemove } = useSelectboxContext();

  return (
    <div
      className="text-navy-blue relative flex min-h-[42px] w-full cursor-pointer items-center rounded-lg bg-white px-5 py-3 pr-12 text-sm outline-0"
      onClick={handleToggle}
      tabIndex={0}
      role="button"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      {value.length > 0 ? (
        <div className="flex flex-wrap gap-1">
          {value.map(selectedValue => {
            const selectedOption = options.find(option => option.value === selectedValue);
            return selectedOption ? (
              <div
                key={selectedOption.value}
                className="bg-navy-blue/10 text-navy-blue flex items-center rounded-md px-2 py-1 text-sm capitalize"
              >
                {selectedOption.label}
                <XMarkIcon
                  className="hover:text-red text-navy-blue ml-1 h-4 w-4 cursor-pointer transition-colors"
                  onClick={e => {
                    e.stopPropagation();
                    handleRemove(selectedOption.value);
                  }}
                />
              </div>
            ) : null;
          })}
        </div>
      ) : (
        <span className="text-navy-blue/50">{placeholder || "Select options"}</span>
      )}
      <ChevronDownIcon
        className={clsx("absolute right-5 text-black/50 transition-transform", { "rotate-180": isOpen })}
        width={16}
        height={16}
      />
    </div>
  );
};
