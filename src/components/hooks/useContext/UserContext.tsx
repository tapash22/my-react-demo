// src/context/user/UserContext.tsx
import { createContext, useReducer, type ReactNode } from "react";
import { initialState, userReducer } from "../../../reducer/userReducer";
import type { UserContextType } from "../types/CurrentUser";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
