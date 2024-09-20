import LandingPage from "@/pages/LandingPage";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./paths.route";

export const router = createBrowserRouter([
  {
    path: ROUTES.LANDING_PAGE,
    element: <LandingPage />,
  },
  { path: "*", element: <Navigate to={ROUTES.LANDING_PAGE} /> },
]);
