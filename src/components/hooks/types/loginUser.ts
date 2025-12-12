// src/context/user/loginUser.ts
import { useContext } from "react";
import type { UserContextType } from "./CurrentUser";
import { UserContext } from "../useContext/UserContext";

export function loginUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) throw new Error("loginUser must be used within UserProvider");
  return context;
}
