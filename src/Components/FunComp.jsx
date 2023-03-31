import React from "react";

function Fcomp()
{
    // let arr=[1,2,3,4,5]
    // arr.forEach((val, i, ary)=> {
    //     console.log(val,i,ary);
    // })
    let details = [
        {
            id: 1,
            name: "Rushabh",
            address: "abc"
        },
        {
            id: 2,
            name: "Mohan",
            address: "xyz"
        },
        {
            id: 3,
            name: "Ramesh",
            address: "pqr"
        }
    ]
    return(
        <div>
                <table border="1">
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>address</th>
                    </tr>
                
                {
                    details.map((val,i)=> {
                        return <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.address}</td>
                        </tr>
                    })
                }            
                </table> 
            </div>
    )
}

export default Fcomp;