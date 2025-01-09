import React, { useState, useEffect } from "react";
import TaskCount from "./TaskCount";
import Tasks from "./Tasks";

export default function Day(props) {
  let [taskCount, setTaskCount] = useState(0);
  const [titleValue, setTiltle] = useState("");
  const [descriptionValue, setDescription] = useState("");
  let [tasks, setTasks] = useState([]);

  const taskAdd = () => {
    if (!titleValue) {
      return window.alert("Please enter a task title.");
    }
    if (!descriptionValue) {
      return window.alert("Please enter a task description.");
    }

    let storeTask = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = { title: titleValue, description: descriptionValue };

    setTasks([...tasks, newTask]);
    setTaskCount((taskCount = tasks.length + 1));

    storeTask.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(storeTask));
    localStorage.setItem("total tasks", JSON.stringify(storeTask.length));

    console.log("Tasks saved to local storage:", localStorage.getItem("tasks"));
    console.log(
      "Total task saved to local storange:",
      localStorage.getItem("total tasks")
    );

    setTiltle("");
    setDescription("");
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("Loaded tasks from local storage:", savedTasks);
    const savedTasksLength =
      JSON.parse(localStorage.getItem("total tasks")) || 0;

    setTaskCount(savedTasksLength);
    setTasks(savedTasks);
  }, []);

  const getTitle = (event) => {
    setTiltle(event.target.value);
  };

  const getDescription = (event) => {
    setDescription(event.target.value);
  };

  const resetTasks = () => {
    localStorage.clear();
    setTasks([]); 
    setTaskCount(0);
  };

  return (
    <>
      <p className="border m-4 p-4 text-center">{props.day}</p>

      <div className="border m-4 p-4 d-flex justify-content-evenly">
        <TaskCount totalTask={taskCount} doneTask={0} resetTasks={resetTasks}/>

        <div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
            <input
              type="text"
              className="form-control"
              aria-describedby="basic-addon1"
              value={titleValue}
              onChange={getTitle}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Description
            </span>
            <textarea
              type="text"
              className="form-control"
              aria-describedby="basic-addon1"
              rows="1"
              value={descriptionValue}
              onChange={getDescription}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={taskAdd}>
            Add
          </button>
        </div>
      </div>
      <Tasks tasks={tasks} />
    </>
  );
}
