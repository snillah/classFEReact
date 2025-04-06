/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getAllTaskList } from "../site/Tasks/taskApiHandlers";

//create context
const TaskContext = createContext();

//task reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case "Task_List":
      return [...action.payload];

    case "ADD_TASK":
      return [
        ...state,
        action.payload
      ];

    case "TOOGLE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

//Provider component
const TaskProvider = ({ children }) => {
  const initialData = [
    // {
    //   id: Date.now(),
    //   text: "task text",
    //   completed: false,
    // },
  ];
  const [tasks, dispatch] = useReducer(taskReducer, initialData);
  useEffect(()=>{
    getAllTaskList()
    .then((data)=>{
      dispatch({type:"Task_List",payload:data})
    })
    .catch((err)=>{
      console.log("Error get Task List",err);
    })
  },[])
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

export function useTaskContext() {
  return useContext(TaskContext);
}
