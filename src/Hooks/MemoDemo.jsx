import React, { useMemo, useState } from "react";

function MemoDemo() {
  let [num, setNum] = useState(1);
  let [item, setItem] = useState(10);
  const data = useMemo(() => {
    console.log("Usememo called");
    return item * 3;
  }, [item]);
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Update </button>
      <h1>{item}</h1>
      <h1>{data}</h1>
      <button onClick={() => setItem(item + 10)}>Update </button>
    </div>
  );
}

export default MemoDemo;
