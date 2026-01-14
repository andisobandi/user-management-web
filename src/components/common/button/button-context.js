import React from "react";

export const ButtonContext = React.createContext();

export const useButtonContext = () => React.useContext(ButtonContext);

export function ButtonProvider({ children, value }) {
  return (
    <ButtonContext.Provider value={React.useMemo(() => value, [value])}>
      {children}
    </ButtonContext.Provider>
  );
}
