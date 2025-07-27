import React from "react";
import { Link, Outlet } from "react-router";
import "../../../app.css"

function Layout() {
  return (
    <>
      <div className="app-layout">
        <header>
          <Link className="" to={"/"} style={{fontSize:"34px",textDecoration:"none",color:"black",fontWeight:"bold"}}>My Blog</Link>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about-us"}>AboutUs</Link>
            <Link to={"/article"}>Article</Link>
          </nav>
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer style={{display:"flex",justifyContent:"center"}}>
          <div>React Application in Footer</div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
