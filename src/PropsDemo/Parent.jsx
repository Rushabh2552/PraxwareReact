import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <Child obj={{ userid: 1, name: "Rushabh", email: "rus@1.com" }} />
    </div>
  );
}

export default Parent;
