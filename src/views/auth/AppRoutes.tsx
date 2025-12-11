import { useRoutes } from "react-router-dom";
import Login from "./Login";
import Demo from "./Demo";
import DashboardLayout from "./DashboardLayout";
import Home from "../Home";
import Profile from "./Profile";

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
      element: <ProtectedRoute />, // only visible when logged IN
      children: [
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            { index: true, element: <Home /> }, // /dashboard
            { path: "home", element: <Home /> }, // /dashboard/home
            { path: "profile", element: <Profile /> }, // /dashboard/profile
          ],
        },
      ],
    },
    // always accessible
  ];

  return useRoutes(routes);
}
