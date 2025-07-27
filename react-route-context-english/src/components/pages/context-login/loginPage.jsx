import React, { useState } from "react";
import { useNavigate } from "react-router";


function Login(){

    const [userName,setUserName] = useState("");
    const navigate = useNavigate();

    const handleSumbit = (e) =>{
        e.preventDefault();
        setUser({username:userName})
        navigate("/profile")
    }


    return(

        <>
            <div>Login Details</div>
            <form onSubmit={handleSumbit}>
            <input
            type="type"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
            <input
             type="password"
            />
            <button type="submit">Login</button>
            </form>
        
        </>
    )
}

export default Login;