import React, { useContext } from "react";
import { EmployeeContext } from "./CreateContextDemo";

function UseHooks() {
  const empContext = useContext(EmployeeContext);
  return (
    <div>
      <h1>hi {empContext.username}</h1>
    </div>
  );
}

export default UseHooks;
