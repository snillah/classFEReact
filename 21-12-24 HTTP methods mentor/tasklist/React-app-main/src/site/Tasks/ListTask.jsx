import { useCallback, useState } from "react";
import { useTaskContext } from "../../context/TaskProvider";
import { Box, Button, List, ListItem, Paper, Typography } from "@mui/material";
import BaseTaskApp from "./BaseTaskApp";
import { useNavigate } from "react-router-dom";
import { deleteTask, editTask } from "./taskApiHandlers";
import { TaskSearchBar } from "./taskSearchBar";

function ListTask() {
  const styleObj = {
    display: "flex",
    gap: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80vw",
    padding: "10px",
    margin: "10px",
  };
  const { tasks, dispatch } = useTaskContext();
  const [filterValue,setFilterValue] = useState([...tasks])
  const navigate = useNavigate();
  console.log("task List component rerenderd");

  const handleToggle = useCallback(
    (id) => {
      console.log("toggle task function rerenderd", id);
      let toggleData = tasks.find((task) => task?.id === id);
      let payload = { ...toggleData, completed: !toggleData.completed };
      console.log("payload", payload, id);
      editTask(id, payload)
        .then((data) => {
          if (data) {
            dispatch({ type: "TOOGLE_TASK", payload: data });
          }
        })
        .catch((err) => {
          console.log("error in edit Data", err);
        });
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id) => {
      deleteTask(id)
        .then((data) => {
          dispatch({ type: "REMOVE_TASK", payload: data.id });
        })
        .catch((err) => {
          console.log("error in deleting the data", err);
        });
      console.log("remove task task function rerenderd");
      dispatch({ type: "REMOVE_TASK", payload: id });
    },
    [dispatch]
  );
  const changeValue = (value) => {
    console.log("search", value);
    tasks.filter((task) => {
      if(value ===""){
        setFilterValue(tasks)
      }else{
        // setFilterValue(task.text==value)
        console.log(task.text==value);
        
      }
    });
  };
  console.log("map",filterValue);
  console.log("task",tasks);
  
  return (
    <BaseTaskApp>
      <TaskSearchBar searchChanger={changeValue} />
      <List>
        <Paper>
          {filterValue?.map((task) => (
            <ListItem key={task.id} sx={styleObj}>
              <Typography
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </Typography>
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleToggle(task.id)}
                >
                  {!task.completed ? "Done" : "Redo"}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate(`/task/${task.id}`)}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleRemove(task.id)}
                >
                  Remove
                </Button>
              </Box>
            </ListItem>
          ))}
        </Paper>
      </List>
    </BaseTaskApp>
  );
}
export default ListTask;
