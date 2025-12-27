// import { StrictMode } from "react";
// import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/theme/ThemeProvider.tsx";
import AppRoutes from "./views/auth/AppRoutes.tsx";
import { UserProvider } from "./views/auth/UserProvider.tsx";
import { ToastProvider } from "./components/toaster/ToastProvider.tsx";
import "./components/chart/chartSetup.ts";
import { store } from "./store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <ToastProvider>
            <AppRoutes />
          </ToastProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
