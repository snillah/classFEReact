import React from "react";
import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="app-layout">
        <header>
          <Link to={"/"}>My Blog</Link>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about-us"}>AboutUs</Link>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <div>React Application in Footer</div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
