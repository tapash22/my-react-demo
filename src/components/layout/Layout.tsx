import { useLocation } from "react-router-dom";
import Navbar from "../bar/Navbar";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  const hideNavbar = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}
