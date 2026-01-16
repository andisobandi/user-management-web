import React from "react";
import { userReducer } from "./user-reducer";

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  mode: null,
};

const UserContext = React.createContext({ state: initialState, dispatch: () => null });

export function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  const values = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export const useUserContext = () => React.useContext(UserContext);
