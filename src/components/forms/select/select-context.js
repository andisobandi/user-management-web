import { createContext } from "@utils/create-context";

export const [SelectProvider, useSelectContext] = createContext({
  name: "SelectProvider",
});
