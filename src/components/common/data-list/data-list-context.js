import { createContext } from "@utils/create-context";

export const [DataListProvider, useDataListContext] = createContext({
  name: "DataListProvider",
});
