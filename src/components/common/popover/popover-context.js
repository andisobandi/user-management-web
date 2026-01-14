import { createContext } from "@utils/create-context";

export const [PopoverProvider, usePopoverContext] = createContext({
  name: "PopoverProvider",
});
