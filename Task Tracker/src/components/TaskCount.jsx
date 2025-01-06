import React from "react";

export default function TaskCount({totalTask, doneTask}) {
  return (
    <div className="m-4 lg">
      <p>Total Tasks: {totalTask}</p>
      <p>Done Tasks: {doneTask}</p>
      <p>Remaining Tasks: {totalTask - doneTask}</p>
    </div>
  );
}
