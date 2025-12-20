import { useRoutes } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { ProtectedRoute, PublicRoute } from "../../routes/AuthRoutes";
import { lazy, Suspense, useEffect, useState } from "react";
// import App from "../../App";

// Lazy pages
const Login = lazy(() => import("./Login"));
const Demo = lazy(() => import("./Demo"));
const DashboardLayout = lazy(() => import("./DashboardLayout"));
const Home = lazy(() => import("./Home"));
const Profile = lazy(() => import("./Profile"));

export default function AppRoutes() {
  //handle route path
  const [ready, setReady] = useState(false);

  // Initial load (5s splash)
  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
    // { path: "/app", element: <App /> },
  ];

  // Hook ALWAYS runs
  const element = useRoutes(routes);
  if (!ready) return <Loader />;

  return <Suspense fallback={<Loader />}>{element}</Suspense>;
}
