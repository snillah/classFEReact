import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "./loginContextProvider";


function ContextProfilePage(){

    const {user} = useLogin();

    console.log("name",user,!user)
    if(!user) return <p>Please Login First</p>


    const [userName,setUserName] = useState("");
    const navigate = useNavigate("");

    


    return(

        <>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>

            <h2>Profile Page {user.userName} new person</h2>       
            </div>
        </>
    )
}

export default ContextProfilePage;
