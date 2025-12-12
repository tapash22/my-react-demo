import { useReducer, type ReactNode } from "react";
import { initialState, userReducer } from "../../reducer/userReducer";
import { UserContext } from "../../components/hooks/useContext/userContext";

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
