import { createContext } from "@utils/create-context";

export const [AvatarProvider, useAvatarContext] = createContext({
  name: "AvatarProvider",
  strict: false,
});
