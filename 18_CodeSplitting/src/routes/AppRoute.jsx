import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import { lazy, Suspense } from "react";
// import { UserApi } from "../api/UserApi";


let AboutPage = lazy(() => import("../pages/AboutPage"));
let ContactPage = lazy(() => import("../pages/ContactPage"));

const AppRoute = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "about",
        //   loader: UserApi,
        //   hydrateFallbackElement: <h1>Api Loading...</h1>,
          element: (
            <Suspense fallback={<h1>About Loading....</h1>}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<h1>Contact Loading....</h1>}>
              <ContactPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
