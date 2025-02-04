import { parseDate } from "@src/utils";
import { useFiltersStore } from "@src/store";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CATEGORIES_OPTIONS, SOURCES_OPTIONS } from "@src/constants";
import { DatePickerInput, SelectboxInput, TextInput } from "..";

export const Filters = () => {
  const { filters, setFilter } = useFiltersStore();

  return (
    <div className="mx-auto flex max-w-7xl items-start justify-between gap-3 rounded-2xl bg-white/35 p-10 max-xl:mx-5 max-lg:flex-col max-lg:items-stretch">
      <TextInput
        id="search"
        label="Search:"
        placeholder="what are you looking for?"
        icon={<MagnifyingGlassIcon width={16} height={16} />}
        value={filters.query}
        onChange={e => setFilter("query", e.target.value)}
      />
      <SelectboxInput
        id="category"
        label="Category:"
        options={CATEGORIES_OPTIONS}
        placeholder="Choose a category"
        onChange={value => setFilter("categories", value)}
        value={filters.categories}
      />
      <SelectboxInput
        id="source"
        label="Source:"
        options={SOURCES_OPTIONS}
        placeholder="Choose a source"
        onChange={value => setFilter("sources", value)}
        value={filters.sources}
      />
      <DatePickerInput
        label="From date:"
        placeholder="From date"
        value={parseDate(filters.fromDate)}
        onChange={date => setFilter("fromDate", `${date?.year}-${date?.month}-${date?.day}`)}
      />
      <DatePickerInput
        label="To date:"
        placeholder="To date"
        value={parseDate(filters.toDate)}
        onChange={date => setFilter("toDate", `${date?.year}-${date?.month}-${date?.day}`)}
        minimumDate={parseDate(filters.fromDate)}
      />
    </div>
  );
};
