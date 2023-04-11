import axios from "axios";
import React, { useState } from "react";

function LoginForm() {
  let [fullname, setFullName] = useState();
  let [lastname, setLastName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [area, setArea] = useState();
  let [address, setAddress] = useState();
  let [city, setCity] = useState();
  let [state, setState] = useState();

  function handleForm(e) {
    e.preventDefault();
    const data = {
      fullname: fullname,
      lastname: lastname,
      email: email,
      password: password,
      area: area,
      address: address,
      city: city,
      state: state,
    };

    axios({
      method: "post",
      url: "https://rushabhmodi25.000webhostapp.com/RegiForm/insert.php",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      // axios.postForm("https://rushabhmodi25.000webhostapp.com/insert.php", data)
      .then((res) => {
        console.log(res);
        alert("Entry Inserted Succesfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Online Registration</h1>
      <p>
        Please fill in the form below. We'll contact you as soon as possible.
      </p>
      <form onSubmit={handleForm}>
        <label>First Name:</label>
        <br />
        <input type="text" onChange={(e) => setFullName(e.target.value)} />
        <br />
        <label>Last Name:</label>
        <br />
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
        <br />
        <label>Email:</label>
        <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Area: </label>
        <br />
        <select
          name="address"
          id="address"
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="">Area</option>
          <option value="ParimalGarden">ParimalGarden</option>
          <option value="Ambavadi">Ambavadi</option>
          <option value="LawGarden">LawGarden</option>
          <option value="Navrangpura">Navrangpura</option>
        </select>
        <br />
        <label>Address: </label>
        <br />
        <textarea
          name=""
          id=""
          cols="50"
          rows="2"
          spellCheck="false"
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
        <label>City: </label>
        <br />
        <select name="city" id="city" onChange={(e) => setCity(e.target.value)}>
          <option value="">City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Gandhinagar">Gandhinagar</option>
          <option value="Vadodara">Vadodara</option>
        </select>
        <br />
        <label>State: </label>
        <br />
        <select
          name="State"
          id="State"
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">State</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Maharastra">Maharastra</option>
          <option value="Madhyapradesh">Madhya Pradesh</option>
        </select>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
