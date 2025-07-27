import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/pages/basic-route/layout";
import NotFoundPage from "./components/pages/basic-route/nfp";
import HomeLayout from "./components/pages/basic-route/LayoutPages/home-layout";
import AboutUs from "./components/pages/basic-route/aboutus";
import ArticleDetailPage from "./components/pages/basic-route/LayoutPages/article-detail-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeLayout/>}></Route>
          <Route path="/article" element={<AboutUs />}></Route>
          <Route path="/article/:articleId" element={<ArticleDetailPage />}></Route>
        </Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
