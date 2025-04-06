import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button/button'
import props from './assets/props-desturct.png'
import propsDrilling from './assets/propsdrilling.png'
function App() {

  const appValue = "Value from App"
  return (
    <>
      <div>
        <h1>Functional components</h1>
        <h3>Reusable components</h3>
        <Button size={"lg"} varaint={"primary"} value={"Login"}/>
        <Button size={"xl"} varaint={"danger"} value={"Delete"}/>
        <Button size={"sm"} varaint={"warning"} value={"Alert"}/>
        <Button size={"md"} varaint={"success"} value={"Submit"}/>
        <h1>Passing props</h1>
        <h4>App : {appValue}</h4>
        <h3>Parent to Child Passing</h3>
        <ParentComponent data={appValue}/>
        </div>
    </>
  )
}

export default App

function ParentComponent ({data={value}}){

  // let props = {name:"value1"}
  // let name = props 

  let parentValue = data + " Add parent value"
  let childToParentValue =""

  function handleChildToParrentData(CtPData){
    console.log("@@@@",CtPData);
    childToParentValue = CtPData;
    return childToParentValue;
  }
  console.log("Data From Child",childToParentValue);
  
  return(
    <>
    <h1>Parent Companents : {parentValue} </h1>
    <h3>How props destructure</h3>
    <img src={props}></img>
    <ChildCompanents childData={parentValue}/>
    <ChildToParentPassing sendData={parentValue} updatefromChild={handleChildToParrentData}/>
    <p>Child data using in Parent components : {childToParentValue} the value will get updated only by changing the state variable to bind the dom variable</p>
    </>
  )
}
function ChildCompanents(props){
  let childValue = props.childData + " Add Child value";
  return(
    <>
    <h1>Child Component : {childValue}</h1>
    <h2>Props Driling</h2>
    <GrandChildCompanents grand={childValue}/>
    <img src={propsDrilling}></img>
    </>
  )
}
function GrandChildCompanents(props){
  let GchildValue = props.grand + " Add Grand Child value";
  return(
    <>
    <h1>Grand Child Component : {GchildValue}</h1>
    </>
  )
}

function ChildToParentPassing({sendData,updatefromChild=()=>{}}){
  let parentData =sendData
  let childAndParentData = "Hi I am child data Add"+parentData
  console.log("Child Data",childAndParentData);
  
  updatefromChild(childAndParentData)
  return(
    <>
    <h1>Child To Parent Data: getting Parent:{parentData} and manuculate with child data and send to Parent component</h1>
    <p>While passing the data from child to Parent using Function in parameter of child component and before return call the function and passing Parameter in child components itself </p>
    <p>In Parent getting data by functionName from child and create function Name without passing Parameter in parent component</p>
    <p>In Create function in parent component using the parameter and get it</p>
    </>
  )
}