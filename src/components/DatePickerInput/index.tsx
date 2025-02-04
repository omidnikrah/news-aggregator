import DatePicker, { CalendarProps, DayValue, utils } from "@amir04lm26/react-modern-calendar-date-picker";
import { CalendarIcon } from "@heroicons/react/24/outline";

interface IDatePickerInput extends CalendarProps<DayValue> {
  placeholder: string;
  label: string;
}

export const DatePickerInput = ({ placeholder, label, ...rest }: IDatePickerInput) => {
  return (
    <div className="relative flex flex-1 flex-col gap-2">
      <label className="text-navy-blue text-md">{label}</label>
      <div className="relative flex items-center">
        <DatePicker
          inputPlaceholder={placeholder}
          wrapperClassName="w-full"
          inputClassName="!w-full !rounded-lg bg-white !px-5 !py-3 !pr-12 !text-sm !border-0 !text-left !outline-0"
          shouldHighlightWeekends
          maximumDate={utils("en").getToday()}
          {...rest}
        />
        <div className="absolute right-5 z-100 self-center text-black/50">
          <CalendarIcon width={16} height={16} />
        </div>
      </div>
    </div>
  );
};
