import { createContext } from "@utils/create-context";

export const [DialogProvider, useDialogContext] = createContext({
  name: "DialogProvider",
});
