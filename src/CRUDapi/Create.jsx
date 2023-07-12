import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };

    axios({
      method: "post",
      url: "https://rushabhmodi25.000webhostapp.com/insert.php",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      // axios.postForm("https://rushabhmodi25.000webhostapp.com/insert.php", data)
      .then((res) => {
        console.log(res);
        alert("Entry Inserted Succesfully");
        navigate(`/show`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
    <h1>Register</h1>
      <form onSubmit={handleForm}>
        <label>Name:</label>
        <br />
        <input type="text" required onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label>
        <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" />
      </form>
      <Link to={"/show"}>Show data</Link>
    </div>
  );
}


export default Create;
