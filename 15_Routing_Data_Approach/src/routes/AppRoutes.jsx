import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },

        {
          path: "products",
          element: <Products />,
        },

        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
