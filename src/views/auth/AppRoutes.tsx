import { useRoutes } from "react-router-dom";
import Login from "./Login";
import Demo from "./Demo";
import DashboardLayout from "./DashboardLayout";
import Home from "../Home";
import Profile from "./Profile";
import App from "../../App";

import { ProtectedRoute, PublicRoute } from "../../routes/AuthRoutes";

export default function AppRoutes() {
  const routes = [
    {
      element: <PublicRoute />,
      children: [
        { index: true, element: <Login /> },
        { path: "/login", element: <Login /> },
        { path: "/demo", element: <Demo /> },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "home", element: <Home /> },
            { path: "profile", element: <Profile /> },
          ],
        },
      ],
    },
    { path: "/app", element: <App /> },
  ];

  return useRoutes(routes);
}
