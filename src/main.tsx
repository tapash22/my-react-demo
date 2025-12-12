import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./App.tsx";
// import { ThemeProvider } from "./components/theme/ThemeProvider.tsx";
import AppRoutes from "./views/auth/AppRoutes.tsx";
import { UserProvider } from "./components/hooks/useContext/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider> */}
      <UserProvider>
        <AppRoutes />
      </UserProvider>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </StrictMode>
);
