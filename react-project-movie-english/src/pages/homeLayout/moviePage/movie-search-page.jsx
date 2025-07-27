
/*
complete search page vistble to the userr
component to be used : navbar,search bar, product card,
when make api we show the loader and error message
For api call: db and add to cart list api's

*/

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigationbar from "../../../components/UI/navigationBar";
import SearchBar from "../../../components/UI/searchBar";
import Loader from "../../../components/UI/loader";
import ErrorMessage from "../../../components/UI/errorMessage";
import MovieDetailPage from "./movie-details-page";
import ProductCart from "../../../components/UI/product-card";
import { addCartList, getProductList } from "../../../api/watchList";

function MovieSearchPage(){
    const navigate = useNavigate();
    const {search} = useLocation()
    // Todo search level queries - inital queries
    const [movies,setMovies] =useState([]);
    const [isLoading,setLoading] =useState(false);
    const [isError,setError] =useState("");

    const performSearch = async (searchQuery) => {
        setLoading(true)
        try{
            // const response = await productDB.get("/",{params:{s:searchQuery}});
            const response = await getProductList()
            console.log()
            setMovies(response.data.Search)
        }catch(err){
            setError("could fetch the movie")
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    console.log("I movie search page working")
    const handleSearch = (searchQuery) => {
        navigate(`/products/${searchQuery}`)
        performSearch(searchQuery)
    }

    const handleAdd = async() => {
            try{
                const response = await addCartList()
            }catch(err){

            }finally{

            }
    }

    return (

        <>
        <Navigationbar/>
        <SearchBar onSearch={handleSearch}/>
        {isLoading&&<Loader/>}
        {isError&&<ErrorMessage message ={isError}/>}
        <h2>Hi i am there</h2>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                movies.map((movie,index)=>{
                    return(
                        <Link key={index}
                        
                        to={`/movies/${movie.imdbId}`}>
                            <ProductCart product={movie} onAddToCardList={handleAdd} />
                        </Link>
                    )
                })
            }
        </div>
        </>
    )
}

export default MovieSearchPage;