/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BaseTaskApp from "./BaseTaskApp";
import { Box, Paper, Typography } from "@mui/material";
import { useTaskContext } from "../../context/TaskProvider";
import { useParams } from "react-router-dom";
import { getTask } from "./taskApiHandlers";

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useTaskContext();
  const [task, setTask] = useState({});
  useEffect(() => {
    getTask(id)
    .then((data)=>{
      if(data){
        setTask(data)
      }
    })
    .catch((err)=>{
      console.log("Error in getting details",err);
      
    })
    const selectedTask = tasks.filter((task) => task.id === parseInt(id));
    setTask(...selectedTask);
  }, [id, tasks]);

  return (
    <BaseTaskApp>
      {task && (
        <Box>
          <Paper
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "80vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Created at : {task.createdTime}</Typography>
            <Typography variant="h4">{task.text}</Typography>
            {task.completed ? (
              <Typography color="success">Completed</Typography>
            ) : (
              <Typography color="secondary">In progress</Typography>
            )}
          </Paper>
        </Box>
      )}
    </BaseTaskApp>
  );
};

export default TaskDetails;
