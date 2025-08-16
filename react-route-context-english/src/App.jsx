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
import ProfilePage from "./components/pages/context-login/profilePage";
import ContextProfilePage from "./components/pages/context-login/context-api/context-profilePage";
import ContextLogin from "./components/pages/context-login/context-api/loginPage";
import { LoginProvider } from "./components/pages/context-login/context-api/loginContextProvider";

function App() {
  const [user, setUser] = useState(); // it wil goes to Login-context
  return (
    <>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeLayout />}></Route>
            <Route path={"/about-us"} element={<AboutUs />}></Route>
            <Route path="/article" element={<ArticleLayout />}></Route>
            {/* dynamically return -> article Detail page //use : for define the dynamic value*/}
            <Route
              path="/article/:articleId"
              element={<ArticleDetailPage />}
            ></Route>
          </Route>
          {/* without using Caontext-Api */}
          <Route>
            <Route
              path={"/profile"}
              element={<ProfilePage user={user} />}
            ></Route>
            <Route path="/login" element={<Login setter={setUser} />}></Route>
          </Route>
          <Route>
            {/* Using Context api - No more props to be passed*/}
            {/* the Login-context-provider will not come under the router */}
            <Route
              path={"/profile-context"}
              element={<ContextProfilePage />}
            ></Route>
            <Route path="/login-context" element={<ContextLogin />}></Route>
          </Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </LoginProvider>
    </>
  );
}

export default App;
