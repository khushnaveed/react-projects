import React from "react";

export default function Tasks({ tasks }) {
  return (
    <div className="m-4 p-4 container border">
      {tasks.map((task, index) => (
        <div key={index} className="border border-primary">
          <h5>{task.title}</h5>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}