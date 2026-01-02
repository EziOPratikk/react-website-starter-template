import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout.tsx";
import NotFoundPage from "../pages/not-found/NotFoundPage.tsx";
import HomePage from "../pages/home/HomePage.tsx";

import { ROUTES } from "../shared/constants/routes.ts";

const AppRoutes = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
    ],
  },
]);

export default AppRoutes;
