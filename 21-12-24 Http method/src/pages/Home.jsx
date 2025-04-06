import React from "react";
import NavBar from "../components/UI/navbar";
import { Route, Routes } from "react-router-dom";
import Taskhome from "../components/taskapp/taskhome";

function Home() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Home;
