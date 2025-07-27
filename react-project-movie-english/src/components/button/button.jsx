import React from "react";
import './button.css';

function Button ({varaint,value,className,size}){

    //

    function printValue (value){
        console.log("Print the Value",value)
    }

return(
    <>
        <button className={"btn"+" "+varaint+" "+size} onClick={printValue(value)}>{value}</button>
    </>
)

}
export default Button;