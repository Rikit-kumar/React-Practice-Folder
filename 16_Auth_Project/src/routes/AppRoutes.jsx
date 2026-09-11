import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AuthProtectedRoute from "./AuthProtectedRoute";
import UserPage from "../pages/UserPage";
import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },

    {
      path: "/main",
      element: <AuthProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "users",
              element: <UserPage />,
            },
            {
              path: "products",
              element: <ProductsPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "wishlist",
              element: <WishlistPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
