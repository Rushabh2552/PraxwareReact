/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

function UseEffectDemo() {
  const [num, setNum] = useState(1);
  const [item, setItem] = useState(10);

  useEffect(() => {
    console.log("number called");
  }, [num]);

  useEffect(() => {
    console.log("item called");
  }, [item]);

  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Update button
      </button>
      <h1>{item}</h1>
      <button
        onClick={() => {
          setItem(item + 1);
        }}
      >
        Update item
      </button>
    </div>
  );
}

export default UseEffectDemo;
