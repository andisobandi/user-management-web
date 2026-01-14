import { createContext } from "@utils/create-context";

export const [FieldProvider, useFieldContext] = createContext({
  name: "FieldProvider",
});
