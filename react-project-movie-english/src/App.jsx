import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/homeLayout/layout";
import NotFoundPage from "./pages/not-found-page";
import Home from "./pages/homeLayout/homepage.jsx";
import ArticleDetailsPage from "./pages/homeLayout/article/article-details-page.jsx";
import ArticlePage from "./pages/homeLayout/article/article-page";
import MovieSearchPage from "./pages/homeLayout/moviePage/movie-search-page.jsx";
import MovieDetailPage from "./pages/homeLayout/moviePage/movie-details-page.jsx";
import WatchDetailPage from "./pages/homeLayout/watchListPage/watch-list-page.jsx";
import WatchListPage from "./pages/homeLayout/watchListPage/watch-list-page.jsx";

function Dashboard() {
    return (
        <h1>Dashboard</h1>
    )
}

function App() {

/*
/moives -> MovieSearchpage
/movie/:id -> movieDetailsPage
/watchList-> watchListPage
/watchList => watchDetailspage

*/

  return (
    <Routes>
        <Route exact path="/" element={<Navigate to ="/movies" replace/>} ></Route>
          <Route path="/movies" element={<MovieSearchPage/>}></Route>
          <Route path="/movies/:id" element={<MovieDetailPage/>}></Route>
          <Route path="/watchList" element={<WatchListPage/>}></Route>
          <Route path="/watchList" element={<WatchDetailPage/>}></Route>
        <Route  path="*" element={<NotFoundPage/>}></Route>
    </Routes>

  );
}

export default App;


// <Routes>
    //     <Route exact path="/" element={<Navigate to ="/movies" replace/>} >
    //       <Route index element={<Home/>}></Route>
    //       <Route path={"/article"} element={<ArticlePage/>}></Route>
    //       <Route path={"/article/articleId:id"} element={<ArticleDetailsPage/>}></Route>
    //     </Route>
    //     <Route  path="*" element={<NotFoundPage/>}></Route>
    // </Routes>