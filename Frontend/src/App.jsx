import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Adult from "./Pages/ShopPage/Adult.jsx";
import Gadgets from "./Pages/ShopPage/Gadgets.jsx";
import Kids from "./Pages/ShopPage/Kids.jsx";
import Layout from "./Layout.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/adult",
          element: <Adult />,
        },
        {
          path: "/gadgets",
          element: <Gadgets />,
        },
        {
          path: "/kids",
          element: <Kids />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
