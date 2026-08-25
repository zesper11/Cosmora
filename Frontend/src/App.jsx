import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Navbar from "./Components/Navbar/navbar.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage> </Homepage>,
    },
  ]);

  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={{ router }}></RouterProvider>
    </>
  );
};

export default App;
