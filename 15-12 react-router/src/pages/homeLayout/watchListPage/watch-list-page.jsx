import React from "react";
import Navigationbar from "../../../components/UI/navigationBar";
import SearchBar from "../../../components/UI/searchBar";
import Loader from "../../../components/UI/loader";
import ErrorMessage from "../../../components/UI/errorMessage";
import { Link } from "react-router-dom";
import ProductCart from "../../../components/UI/product-card";

/*
the list of movie add to the watchList
user should be able to click on a movie card and navigate to watchlist details page
need to handle be able to delete a movie from watchList page
*/

function WatchListPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await getWatch();
      setMovies(response.data);
    } catch (err) {
      setError("could not load watchList");
      console.log("fetch error watch list", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    try {
      await deleteWatchListItems();
      setMovies((prev) => prev.filter(p));
    } catch (err) {
      alert("not fetched watch remove");
    }
  };

  return (
    <>
      <Navigationbar />
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Navigationbar />
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie, index) => {
          return (
            <div key={index} style={{ position: "relative" }}>
                <Link to={`/movies/${movie.imdbId}`} >
            <ProductCart product={movie} onAddToCardList={handleAdd} />
                </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WatchListPage;
