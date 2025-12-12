import { useContext } from "react";
import type { UserContextType } from "./CurrentUser";
import { UserContext } from "../useContext/userContext";

export function useLoginUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) throw new Error("loginUser must be used within UserProvider");
  return context;
}
