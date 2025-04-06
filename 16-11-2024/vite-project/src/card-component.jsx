import React from "react";

function CardComponents({name,img}){
    return(
        <div id="card" type="button" onClick={()=>alert("working")}>
            <img src={img} alt="" />
            <h1>Name :{name}</h1>
        </div>
    )
}
export default CardComponents