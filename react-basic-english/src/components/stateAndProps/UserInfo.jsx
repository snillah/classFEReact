import React,{useState} from "react";


export default function UserInfo(props){
        const {user} = props
    return(
        <>
            <div>
                <h3>{user?.name}</h3>
                <p>Name: {user?.name}</p>
                <p>Role: {user?.role}</p>
            </div>
        </>
    )
}