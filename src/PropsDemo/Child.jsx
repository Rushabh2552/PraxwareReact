import React from "react";

function Child(props) {
  return (
    <div>
      <h1>{props.obj.userid}</h1>
      <h1>{props.obj.name}</h1>
      <h1>{props.obj.email}</h1>
    </div>
  );
}

export default Child;
