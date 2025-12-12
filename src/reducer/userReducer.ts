import type { State, Action } from "../components/hooks/types/CurrentUser";

export const initialState: State = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isLoggedIn: !!localStorage.getItem("user"),
};

export function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { user: action.payload, isLoggedIn: true };

    case "LOGOUT":
      localStorage.removeItem("user");
      return { user: null, isLoggedIn: false };

    case "UPDATE_USER": {
      const updatedUser = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return { ...state, user: updatedUser };
    }

    default:
      return state;
  }
}
