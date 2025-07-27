import React from "react";

function ListCard (props) {
    
    const {pokemon,onFavorite} = props
    
    return(
        <div className="pokemon-card">
            <span>{pokemon?.name}</span>
            <span>
                <button
                onClick={()=> onFavorite(pokemon)}              
                >*</button>
            </span>
        </div>
    )
}
export default ListCard;