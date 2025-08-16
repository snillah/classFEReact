import React from "react";

function Home(){
    return (
        <>
        <h2>Redux</h2>
        <p>Its Means- it is a global state container(centralized data store) to help manage the application state</p>
        <p>Centralizes the state and decouple the data form UI</p>
        <p>
            Standardizes  the data flow via action and reducers.
        </p>
        <p>How to update the store using dispatch</p>
        <ul>
            <li>store - the single js object holding our app's state</li>
            <li>Action  - a plan js object "type ,payload" describes  what happend </li>
            <li>Reducer - a pure js function "state and action" =new state . no sideeffets or async operations </li>
            <li>Dispatch  - the only way to send an action into the store </li>
            <li>Immutability  - never mutate the existing state - always return a new state</li>
            <li>Undirectional flow   - Action - reducer - New state subscribes will receive update store</li>
        </ul>
        </>
    )
}

export default Home;