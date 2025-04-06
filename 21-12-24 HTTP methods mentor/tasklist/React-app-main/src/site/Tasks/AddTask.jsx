import { useRef } from "react";
import { useTaskContext } from "../../context/TaskProvider";
import { Button, TextField } from "@mui/material";
import BaseTaskApp from "./BaseTaskApp";
import { useNavigate } from "react-router-dom";
import { addTask } from "./taskApiHandlers";

function AddTask() {
  const { dispatch } = useTaskContext();
  const navigate = useNavigate();
  // const [taskText, setTaskText] = useState("");
  const inputRef = useRef(null);
  console.log("addTask Component rerenderd");

  const handleAddTasks = () => {
    // if (taskText.trim() === "") return;
    if (inputRef.current?.children[1]?.children[0]?.value === "") return;
    // dispatch({ type: "ADD_TASK", payload: taskText });
    dispatch({
      type: "ADD_TASK",
      payload: inputRef.current?.children[1]?.children[0]?.value,
    });
    inputRef.current.children[1].children[0].value = "";
    navigate("/list");
  };
  
  const handleAddTask = () => {
    if (inputRef.current?.children[1]?.children[0]?.value === "") return;
    addTask(inputRef.current?.children[1]?.children[0]?.value).then((data)=>{
        if(data){
          dispatch({
            type: "ADD_TASK",
            payload:data,
          });
          navigate("/list");
        }
      })
    .catch((err)=>{
      console.log("Error on Add task",err);
    })    
  };
  return (
    <BaseTaskApp>
      <TextField
        sx={{ width: "80vw" }}
        ref={inputRef}
        id="outlined-basic"
        label="Enter Task"
        variant="outlined"
        multiline
        rows={4}
        // value={taskText}
        // onChange={(e) => setTaskText(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddTask}>
        Add Task
      </Button>
    </BaseTaskApp>
  );
}
export default AddTask;
