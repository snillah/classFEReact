import { TextField } from "@mui/material";
import { useTaskContext } from "../../context/TaskProvider";
import { useEffect, useState } from "react";



export const TaskSearchBar=({searchChanger=()=>{}})=>{

const {tasks,dispatch} =useTaskContext();

const [searchValue,setSearchValue] =useState("");

const handleSearch=(e)=>{
    setSearchValue(e.target.value)
    searchChanger(e.target.value)
}

    return(
        <div>
            <TextField
            sx={{width:"80v"}}
            id="outlined-basic"
            label="Search Bar"
            variant="outlined"
            onChange={(e)=>handleSearch(e)}
            value={searchValue}
            />
        </div>
    )
}