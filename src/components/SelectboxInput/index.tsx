import { Option, Selectbox } from "./Selectbox";

interface ISelectboxInput {
  label: string;
  options: Option[];
  onChange: (selectedValues: Option["value"][]) => void;
  value: Option["value"][];
  placeholder?: string;
  id: string;
}

export const SelectboxInput = ({ id, label, options, placeholder, onChange, value }: ISelectboxInput) => {
  return (
    <Selectbox.Root id={id} label={label} options={options} value={value} onChange={onChange}>
      <Selectbox.Trigger placeholder={placeholder} />
      <Selectbox.Options />
    </Selectbox.Root>
  );
};
