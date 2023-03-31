import React, { useState } from "react";

function FunctionalState() {
    let [name, setName] = useState("Rushabh");
    let [num, setNum] = useState(1);
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=> setName("Modi")}>Change Name</button>
            <h1>{num}</h1>
            <button onClick={()=> setNum(num + 1)}>Change Num</button>

            <h1>{name}</h1>
            <h1>{num}</h1>
        </div>
    )
}

export default FunctionalState;