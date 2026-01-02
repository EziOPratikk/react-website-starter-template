import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import LandingPage from "../features/landing/pages/LandingPage.tsx";

import { ROUTES } from "../shared/constants/routes.ts";

const AppRoutes = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <LandingPage />,
      },
    ],
  },
]);

export default AppRoutes;
