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

// Import Inter font
import "@fontsource/inter/400.css"; // normal
import "@fontsource/inter/500.css"; // medium
import "@fontsource/inter/600.css"; // semi-bold
import "@fontsource/inter/700.css"; // bold
import MouseGlow from "./components/mouse-effect/MouseGlow.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <ToastProvider>
            <MouseGlow />
            <AppRoutes />
          </ToastProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);
