//use Navigate to send user to previous page he came from or forward to next page it was supposed to go

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const Home = () => {
  return <h1>Home Page</h1>;
};

function NavigatePage() {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <>
      <button onClick={() => navigate(-2)}>Go 2 pages back</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      <button onClick={() => navigate(2)}>Go 2 pages forward</button>
    </>
  );
}

const UseNavigateDemo = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nav" element={<NavigatePage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default UseNavigateDemo;
