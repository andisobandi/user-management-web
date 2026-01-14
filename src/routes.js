import React from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";

import { AppLayout } from "@layouts/app-layout";
import pages, { Preload } from "./pages";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate replace to="/users" />,
      },
      {
        path: "users",
        element: pages.Users,
      },
    ],
  },
]);

function Routes() {
  return (
    <React.Suspense fallback={<Preload />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default Routes;
