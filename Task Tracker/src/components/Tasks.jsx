import React from "react";

export default function Tasks({ tasks }) {
  return (
    <div className="container d-flex flex-wrap flex-column   ">
      {tasks.map((task, index) => (
        <div key={index} className="m-4 p-4 d-flex border border-primary justify-content-between">
          <div>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
          </div>
          <div className="d-flex flex-column">
            <button type="button" className="btn btn-primary m-1">Delete</button>
            <button type="button" className="btn btn-primary m-1">Done</button>
          </div>
          
        </div>
      ))}
    </div>
  );
}
