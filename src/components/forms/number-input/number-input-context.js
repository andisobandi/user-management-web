import { createContext } from "@utils/create-context";

export const [NumberInputProvider, useNumberInputContext] = createContext({
  name: "NumberInputProvider",
});
