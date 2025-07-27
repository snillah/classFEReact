import React from "react";
import { Link } from "react-router-dom";

function Navigationbar(){


    return(
        <>
            <nav style={{padding:"1rem",borderBottom:""}}>
                <Link to="/products">Search</Link>
                <Link to="/cartList">Cart List</Link>
            </nav>
        </>
    )
}

export default Navigationbar