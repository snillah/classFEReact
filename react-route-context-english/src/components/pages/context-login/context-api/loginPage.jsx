import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "./loginContextProvider";


function ContextLogin(){

    const [userName,setUserName] = useState("");
    const {setUser} = useLogin()
    const navigate = useNavigate();

    const handleSumbit = (e) =>{
        e.preventDefault();
        console.log("name",userName)
        setUser({userName:userName})
        navigate(`/profile-context`)

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

export default ContextLogin;