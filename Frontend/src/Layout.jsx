import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
