import React, { Component } from "react";

// CounterClass

class CounterClass extends React.Component{
    // purpose of constructor : special function used to create and initialize your object
    constructor(props){
        // from parent to access
        super(props);
        this.state = {count:0}
        this.increament = this.increament.bind(this);
    }

    /*
    LifeCycle Methods: this  is what allows to be create, managed
    -constructor
    -getDerivedStateFromProps:for you to update the state based on the props
    -render -returns the JSX to define the UI
    -componentDidMount - invoked after the compoment is mounted .Api
    -component

    
    */
    increament(){
        this.setState({count:this.state.count + 1})
    }
    componentDidMount(){
        console.log("I am component DidMount");
    }
    componentDidUpdate(){
        console.log("Increase counter I will updatation")
    }
    render(){
        console.log("I am rende");
        
        return(
            <div>
                <h2>Class Component</h2>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increament}>Increament</button>
            </div>
        )
    }

} 

export default CounterClass;