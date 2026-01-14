import { createContext } from "@utils/create-context";

export const [MenuProvider, useMenuContext] = createContext({
  name: "MenuProvider",
});
