import React, { createContext } from "react";
import UseHooks from "./UseContextDemo";

export const EmployeeContext = createContext();
function CreateContextDemo() {
  let username = "Rushabh";

  return (
    <div>
      <EmployeeContext.Provider value={{ username: username }}>
        <UseHooks></UseHooks>
      </EmployeeContext.Provider>
    </div>
  );
}

export default CreateContextDemo;
