import React from "react";

export default function Tasks({title, description}) {
  return (
    <>
      <div className="m-4 p-4 container border">
        <div className="border border-primary">
          <div>Title : {title}</div>
          <div>Description : {description} </div>
        </div>
      </div>
    </>
  );
}
