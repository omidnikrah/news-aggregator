import clsx from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

export const TextInput = ({ id, label, icon, className, ...rest }: ITextInput) => {
  return (
    <div className="relative flex flex-1 flex-col gap-2">
      <label className="text-navy-blue text-md" htmlFor={id}>
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type="text"
          id={id}
          className={clsx("text-navy-blue w-full rounded-lg bg-white px-5 py-3 pr-12 text-sm outline-0", className)}
          {...rest}
        />
        {icon && <div className="absolute right-5 self-center text-black/50">{icon}</div>}
      </div>
    </div>
  );
};
