import { createContext } from "@utils/create-context";

export const [ComboboxProvider, useComboboxContext] = createContext({
  name: "ComboboxProvider",
});
