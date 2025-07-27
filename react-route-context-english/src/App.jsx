import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/pages/basic-route/layout";
import NotFoundPage from "./components/pages/basic-route/nfp";
import HomeLayout from "./components/pages/basic-route/LayoutPages/home-layout";
import AboutUs from "./components/pages/basic-route/aboutus";
import ArticleDetailPage from "./components/pages/basic-route/LayoutPages/article-detail-page";
import ArticleLayout from "./components/pages/basic-route/LayoutPages/article-layout";
import Login from "./components/pages/context-login/loginPage";
import { LoginProvider } from "./components/pages/context-login/loginContextProvider";
import ProfilePage from "./components/pages/context-login/profilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeLayout />}></Route>
          <Route path={"/profile"} element={<ProfilePage />}></Route>
          <Route path={"/about-us"} element={<AboutUs />}></Route>
          <Route path="/article" element={<ArticleLayout />}></Route>
          {/* dynamically return -> article Detail page //use : for define the dynamic value*/}
          <Route
            path="/article/:articleId"
            element={<ArticleDetailPage />}
          ></Route>
        </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
     
    </>
  );
}

export default App;
