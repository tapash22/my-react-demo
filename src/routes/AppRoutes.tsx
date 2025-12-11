import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//Lazy load pages
const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));

// Optional: you can add more pages dynamically
const routeConfig = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
];

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}
