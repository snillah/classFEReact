import React, { useCallback, useMemo, useState } from "react";

/* 
Memo => 


*/

function getHexaDecimalValue (hexcolor){

    console.log("Running an expenseive calculation")

    for(let i=0;i<=100000;i++){
        const r =parseInt(hexcolor.subStr(1,2),16);
        const g =parseInt(hexcolor.subStr(1,2),16);
        const b =parseInt(hexcolor.subStr(1,2),16);
        const brightness =parseInt(hexcolor.subStr(1,2),16);
    }
}

// It is StateLess Component - only for Presentation layer,

function ColorCounter({color,onIncrement}){

    const colorCounterDivStyle = {
        width:"10px",height:"100px", backgroundColor:color,margin:"0 auto",border:"1px solid black",color:"white"
    }

    return(
        <>
        <div style={{padding:"10px", textAlign:"center"}}>
            <div style={{colorCounterDivStyle}}>
                <button onClick={onIncrement} style={{color:"white"}}>Increment Counter</button>
            </div>
        </div>
        </>
    )
}

// It is StateFull component
// user interaction will update the state
function ColorPicker() {
  const [color, setColor] = useState("fffff");
  const [counter, setCounter] = useState(0);


const handleIncreament= useCallback(()=>{
        setCounter(cv => cv+1);
},[])

// const textColor = useMemo(()=> {getHexaDecimalValue(color)},[color])



  return (
    <>
      <div
        style={{
          border: "2px solid grey",
          padding: "10px",
          backgroundColor: color,
          color:"white",
        }}
      >
        <h2>Color Picker</h2>
        <p>Counter:{counter}</p>
        <input type="color"
         value={color}
         onChange={(e) => setColor(e.target.value)}
         />
      <ColorCounter color={color} onIncrement={handleIncreament}/>
      </div>
    </>
  );
}

export default ColorPicker;
