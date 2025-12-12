// src/context/user/types.ts
export interface User {
  email?: string;
  password?: string;
}

export interface State {
  user: User | null;
  isLoggedIn: boolean;
}

export type Action =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "UPDATE_USER"; payload: Partial<User> };

export interface UserContextType extends State {
  dispatch: React.Dispatch<Action>;
}
