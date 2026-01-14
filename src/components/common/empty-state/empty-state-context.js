import { createContext } from "@utils/create-context";

export const [EmptyStateProvider, useEmptyStateContext] = createContext({
  name: "EmptyStateProvider",
});
