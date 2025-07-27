import React, { useEffect, useState } from "react";
import ListCard from "./apiListPropsinCard";

// call the API : https://pokeapi.co/api/v2/pokemon?limit=50
// api limit - its mention it query parameter, in this case limit is a key and value is number of parameter
// as using the async and await
function ApiCalls() {
  const [pokiList, setPokiList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);

  const fetchPokiDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokeman List");
      }
      const data = await response.json();
      setPokiList(data.results);
    } catch (err) {
      setError(err);
      console.log("Error on fetch details pokiman", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokiDetails();
  }, []);


const handleForFavorites = (pokemonData) =>{
  console.log("datat",pokemonData)
    const favData = favorite.find(poki => poki.name === pokemonData.name)
    if(!favData){/*facData === undifined */
      return setFavorite([...favorite,pokemonData.name])
    }
    return console.log("false",false)
}

  if(isLoading){
    return<div>Loding...</div>
  }
  if(error){
    return<div>{error}...</div>
  }
  if(pokiList.length === 0){
    return<div>No Data Found</div>
  }
//   filtering the list
// const filteredList = pokiList?.filter((poki) => poki.name.toLowerCase().include(search.toLowerCase()));
const filteredList = pokiList.filter((poki)=> poki.name.toLowerCase().includes(search.toLowerCase()))
console.log("filterList",favorite)
  return (
    <>
      <h2>API Calls</h2>

        <div>
            <h2>Favorites</h2>
            {
              favorite.length !== 0 && favorite.map((fav)=>(
                  <span key={fav}>{fav}</span>  
                ))
            }
        </div>

      <div>
        <input type="text"
        placeholder="search..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      <div>
        {filteredList?.map((poki, index) => {
          return (
            // <div key={index}>
            //   <span>{poki?.name}</span>
            //   <span></span>
            // </div>
            <ListCard
            key={index}
             pokemon={poki}
             onFavorite={handleForFavorites}
            />
          );
        })}
      </div>
    </>
  );
}

export default ApiCalls;
