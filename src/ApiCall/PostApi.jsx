import axios from "axios";
import React, { useState } from "react";

function PostApi() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  function handleform(e) {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleform}>
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <input type="submit" />
      </form>
    </div>
  );
}
export default PostApi;
