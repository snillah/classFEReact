import React from "react";

import HomePage from "./homepage.jsx";
import { Outlet } from "react-router-dom";




function Layout() {
  return (
    <div>
      <h3>Layout page</h3>
      <Outlet/>
    </div>
  );
}

export default Layout;
