import React from "react";

import {
  BrowserRouter as Router,
  Route,
  useParams,
  Routes,
} from "react-router-dom";

function UseParamsDemo() {
  function Home() {
    return <h3>home page </h3>;
  }

  function BlogPost() {
    let { id } = useParams();
    return <div style={{ fontSize: "50px" }}>Now showing post {id}</div>;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page/:id" element={<BlogPost />}></Route>
      </Routes>
    </Router>
  );
}

export default UseParamsDemo;
