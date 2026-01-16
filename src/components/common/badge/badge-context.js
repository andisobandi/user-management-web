import { createContext } from "@utils/create-context";

export const [BadgeProvider, useBadgeContext] = createContext({
  name: "BadgeProvider",
  strict: false,
});
