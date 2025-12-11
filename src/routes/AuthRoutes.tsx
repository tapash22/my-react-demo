import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/auth/useAuth";

// Only for logged-in users
export function ProtectedRoute() {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/demo" />;
}

// Only for NOT logged-in users
export function PublicRoute() {
  const isLoggedIn = useAuth();
  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" />;
}
