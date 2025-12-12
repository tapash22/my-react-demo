import { createContext } from "react";
import type { UserContextType } from "../types/CurrentUser";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
