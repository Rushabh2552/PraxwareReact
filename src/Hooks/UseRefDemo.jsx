import React, { useRef } from "react";

function UseRefDemo() {
  let colorRef = useRef();

  function changeColor() {
    console.log("color change function called");
    colorRef.current.style.color = "red";
  }
  return (
    <div>
      <h1 ref={colorRef}>Hello this is text</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default UseRefDemo;
