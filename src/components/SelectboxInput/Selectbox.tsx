import { SelectboxOptions } from "./SelectboxOptions";
import { SelectboxRoot } from "./SelectboxRoot";
import { SelectboxTrigger } from "./SelectboxTrigger";

export type { Option } from "./selectboxTypes";

export const Selectbox = Object.freeze({
  Root: SelectboxRoot,
  Trigger: SelectboxTrigger,
  Options: SelectboxOptions,
});
