export function useAuth() {
  const isLoggedIn = localStorage.getItem("auth") === "true";
  return isLoggedIn;
}

export function login() {
  localStorage.setItem("auth", "true");
}

export function logout() {
  localStorage.removeItem("auth");
}
