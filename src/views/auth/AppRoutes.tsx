import { Navigate, useRoutes } from "react-router-dom";
// import Loader from "../../components/loader/Loader";
import { ProtectedRoute, PublicRoute } from "../../routes/AuthRoutes";
import { lazy, useEffect, useState } from "react";
// import App from "../../App";

// Lazy pages
const Login = lazy(() => import("./Login"));
const Demo = lazy(() => import("./Demo"));
const DashboardLayout = lazy(() => import("./DashboardLayout"));
const Home = lazy(() => import("./Home"));
const BudgetPlanning = lazy(() => import("./BudgetPlanning"));
const Expenses = lazy(() => import("./Expenses"));
const SavingGoals = lazy(() => import("./SavingGoals"));
const AccountCard = lazy(() => import("./AccountCard"));
const Reports = lazy(() => import("./Reports"));
const Referrals = lazy(() => import("./Referrals"));
const Settings = lazy(() => import("./Settings"));

const Gallery = lazy(() => import("./Gallery"));

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
        {
          index: true,
          element: <Login />,
          handle: { breadcrumb: "Login" },
        },
        {
          path: "login",
          element: <Login />,
          handle: { breadcrumb: "Login" },
        },
        {
          path: "demo",
          element: <Demo />,
          handle: { breadcrumb: "Demo" },
        },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "dashboard",
          element: <DashboardLayout />,
          handle: { breadcrumb: "Dashboard" },
          children: [
            {
              index: true,
              element: <Navigate to="home" replace />,
            },
            {
              path: "home",
              element: <Home />,
              handle: { breadcrumb: "Home" },
            },
            {
              path: "budget-planning",
              element: <BudgetPlanning />,
              handle: { breadcrumb: "Budget Planning" },
            },
            {
              path: "expenses",
              element: <Expenses />,
              handle: { breadcrumb: "Expenses" },
            },
            {
              path: "saving-goals",
              element: <SavingGoals />,
              handle: { breadcrumb: "Saving Goals" },
            },
            {
              path: "account-card",
              element: <AccountCard />,
              handle: { breadcrumb: "Account card" },
            },
            {
              path: "reports",
              element: <Reports />,
              handle: { breadcrumb: "Reports" },
            },
            {
              path: "settings",
              element: <Settings />,
              handle: { breadcrumb: "Settings" },
            },
            {
              path: "referrals",
              element: <Referrals />,
              handle: { breadcrumb: "Referrals" },
            },
            {
              path: "gallery",
              element: <Gallery />,
              handle: { breadcrumb: "Gallery" },
            },
          ],
        },
      ],
    },
  ];

  // Hook ALWAYS runs
  const element = useRoutes(routes);
  // if (!ready) return <Loader />;

  return element;
}
