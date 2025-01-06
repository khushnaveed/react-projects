import React, { useState } from "react";
import TaskCount from "./TaskCount";
import Tasks from "./Tasks";

export default function Day(props) {
  const [taskCount, setTaskCount] = useState(0);
  const [titleValue, setTiltle] = useState("");
  const [descriptionValue, setDescription] = useState("");

  const taskAdd = () => {
    if (!titleValue && !descriptionValue) {
      window.alert("Enter text to the requried fields.")
    } else {
      console.log("add button click");
      console.log("title", titleValue);
      console.log("description", descriptionValue);
      setTiltle("");
      setDescription("");
      setTaskCount(taskCount+1);
    }
  };

  const getTitle = (event) => {
    setTiltle(event.target.value);
  };

  const getDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <p className="border m-4 p-4 text-center">{props.day}</p>

      <div className="border m-4 p-4 d-flex justify-content-evenly">
        <TaskCount totalTask={taskCount} doneTask={0} />

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

      <Tasks title={titleValue} description={descriptionValue} />
    </>
  );
}
