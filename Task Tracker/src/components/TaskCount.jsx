import React from "react";
import Day from "./Day";

export default function TaskCount({ totalTask, doneTask , resetTasks}) {

  return (
    <div className="m-4">
      <p>Total Tasks: {totalTask}</p>
      <p>Done Tasks: {doneTask}</p>
      <p>Remaining Tasks: {totalTask - doneTask}</p>
      <button type="button" className="btn btn-primary" onClick={resetTasks}>
        Reset Tasks
      </button>
    </div>
  );
}
