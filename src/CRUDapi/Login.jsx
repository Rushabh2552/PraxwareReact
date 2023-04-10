import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your login logic with email and password values
    fetch(
      "https://rushabhmodi25.000webhostapp.com/login.php?email=" +
        email +
        "&password=" +
        password
    )
      .then((response) => response.json())
      .then((result) => {
        if (result != null) {
          if (email === result[0].email && password === result[0].password) {
            alert("Correct");
          }
        } else {
          alert("Not Correct");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
