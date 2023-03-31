import React, { useReducer } from "react";

let initialValue = 1;

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  } else {
    throw new Error("Invalid Click");
  }
}

export default UseReducerDemo;
