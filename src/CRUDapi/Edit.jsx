import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit(){
  let refname = useRef();
  let refemail = useRef();
  let refpassword = useRef();
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let params = useParams();
  let [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://rushabhmodi25.000webhostapp.com/showbyid.php?id=" + params.ids
    ).then((res) => {
      // console.log(res);
      res.json().then((result) => {
        setData(result);
        // eslint-disable-next-line array-callback-return
        data.map((val) => {
          setName(val.name);
          setEmail(val.email);
          setPassword(val.password);
        });
      });
    });
  }, [data, params.ids]);

  function handleForm(e) {
    e.preventDefault();
    const data = {
      id: params.ids,
      name: refname.current.value,
      email: refemail.current.value,
      password: refpassword.current.value,
    };

    axios({
      method: "post",
      url: "https://rushabhmodi25.000webhostapp.com/update.php",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      // axios.postForm("https://rushabhmodi25.000webhostapp.com/insert.php", data)
      .then((res) => {
        console.log(res);
        alert("Entry Updated Succesfully");
        navigate(`/show`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Name:</label>
        <input
          type="text"
          ref={refname}
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          ref={refemail}
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          ref={refpassword}
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Edit;
