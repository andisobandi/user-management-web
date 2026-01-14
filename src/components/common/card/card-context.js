import { createContext } from "@utils/create-context";

export const [CardProvider, useCardContext] = createContext({
  name: "CardProvider",
});
