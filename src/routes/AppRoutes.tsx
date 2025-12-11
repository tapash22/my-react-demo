import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { lazyWithDelay } from "../utils/lazyWithDelay";
import Loader from "../components/loader/Loader";

//Lazy load pages
const Home = lazyWithDelay(() => import("../views/Home"), 5000);
const About = lazyWithDelay(() => import("../views/About"), 5000);

// add more pages dynamically
//array of object store routes
const routeConfig = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
];

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}
