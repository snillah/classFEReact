import React, { useReducer, useState } from "react";

const useTodoReducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return { ...state, isCompleted: !state.isCompleted };
    case "EDITING":
      return { ...state, isEditing: !state.isEditing };
    case "UPDATE":
      return { ...state, isEditing: false, taskText: action.payload };
    default:
      return state;
  }
};

const initialState = {
  taskText: "Learning useReducer",
  isEditing: false,
  isCompleted: false,
};

const TodoUseReducer = () => {
  // const [taskText, setTaskText] = useState("Learing Reducer");
  // const [isEdit, setIsEdit] = useState(false);
  // const [isCompleted, setIsCompleted] = useState(false);
  const [state, dispatch ] = useReducer(useTodoReducer, initialState);

   console.log("stateValue",state)
  const handleSave = (newText) => {
    dispatch({type:"UPDATE",payload:newText})
  };

  const handleComplete = () => {
    setIsCompleted(state.isCompleted);
  };

  const handleToggleEdit = () => {
    dispatch({ type: "COMPLETE" });
  };

  const renderContent = () => {
    if (state?.isEditing) {
      return (
        <input
          type="text"
          defaultValue={state?.taskText}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave(e.target.value);
            }
          }}
          autoFocus
        />
      );
    }
    return (
      <span
        style={{ textDecoration: state?.isCompleted ? "line-through" : "none" }}
        onClick={() => handleComplete}
      >
        {state?.taskText}
      </span>
    );
  };

  return (
    <>
      <div>
        <h2>TODO items with UseState</h2>
        {renderContent()}
        <button onClick={()=>{handleToggleEdit}}>
          {state?.isEditing?"cancel":"Edit"}
        </button>
      </div>
    </>
  );
};

export default TodoUseReducer;
