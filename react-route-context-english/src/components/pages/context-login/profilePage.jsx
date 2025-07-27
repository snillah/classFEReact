import React from "react";
import { useNavigate } from "react-router";


function ProfilePage({user}){
    if(!user) return <p>Please Login First</p>


    const [userName,setUserName] = useState("");
    const navigate = useNavigate();

    


    return(

        <>
            <h2>Profile Page {user.userName}</h2>       
        </>
    )
}

export default ProfilePage
