import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Show(){
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rushabhmodi25.000webhostapp.com/show.php").then((res) => {
      // console.log(res);
      res.json().then((result) => {
        setData(result);
      });
    });
  }, [data]);
  const deleteRecord = (id) => {
    fetch("https://rushabhmodi25.000webhostapp.com/delete.php?id="+id).then((res) => {
      // console.log(res);
      res.json().then((result) => {
      });
    });

  }
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <Link to={`/edit/${val.id}`}>Edit data</Link>
                <td><button onClick={(e)=>{deleteRecord(val.id)}}>Delete Record</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Show;
