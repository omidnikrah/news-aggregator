import { SelectboxInput } from "@src/components";
import { CATEGORIES_OPTIONS, SOURCES_OPTIONS } from "@src/constants";
import { usePreferencesStore } from "@src/store";
import { useMemo } from "react";
import { useAuthors } from "@src/queries";

const Preferences = () => {
  const { preferences, setPreferences } = usePreferencesStore();
  const authors = useAuthors();

  const authorsOptions = useMemo(() => {
    return authors?.map(author => ({
      label: author,
      value: author,
    }));
  }, [authors]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start rounded-lg bg-white/50 p-10">
      <span className="text-navy-blue text-lg">Set your preferences:</span>
      <div className="mt-10 flex w-[30%] flex-col gap-3 max-lg:w-full">
        <SelectboxInput
          id="sources"
          label="Sources:"
          options={SOURCES_OPTIONS}
          placeholder="Choose a sources"
          onChange={value => setPreferences("sources", value)}
          value={preferences.sources}
        />
        <SelectboxInput
          id="categories"
          label="Category:"
          options={CATEGORIES_OPTIONS}
          placeholder="Choose a category"
          onChange={value => setPreferences("categories", value)}
          value={preferences.categories}
        />
        <SelectboxInput
          id="author"
          label="Author:"
          options={authorsOptions}
          placeholder="Choose a author"
          onChange={value => setPreferences("authors", value)}
          value={preferences.authors}
        />
      </div>
    </div>
  );
};

export default Preferences;
