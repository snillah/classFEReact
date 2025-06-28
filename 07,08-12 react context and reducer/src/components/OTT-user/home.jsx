import React, { useContext } from "react";
import { OtgContext } from ".";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <HomeWorkArea />
      <Hall />
    </div>
  );
}

export default Home;

function HomeWorkArea() {
  return (
    <>
      <div style={{margin:'12px'}}>
        <h2>Home work Area</h2>
        <Laptop />
        <Tablet />
      </div>
    </>
  );
}
function Hall() {
  return (
    <>
      <div style={{margin:'12px'}}>
      <h2>Hall</h2>
      <TV />
      </div>
    </>
  );
}
function Laptop() {
    const {dataValue,setData} = useContext(OtgContext)
  return (
    <>
      <h4>Laptop: {dataValue}</h4>
      <button onClick={()=> setData("home laptop passing the data")}>change value</button>
    </>
  );
}

function Tablet() {
  return (
    <>
      <h4>Laptop</h4>
    </>
  );
}

function TV() {
  return (
    <>
      <h4>Tv Watches</h4>
    </>
  );
}
