//gets current location of path and state
//onluy used in react router-route

import React from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const UseLocationDemo = () => {
  const Home = () => {
    return <h1>Home Page</h1>;
  };

  const Location = () => {
    const location = useLocation();
    //   console.log(location);
    return (
      <>
        <p>My current location is {location.pathname}</p>
        <p>My current location is {location.hash}</p>
        <p>My current location is {location.key}</p>
        <p>My current location is {location.search}</p>
        <p>My current location is {location.state}</p>

        {location.pathname === `/locate` ? <button> Click Me </button> : null}
      </>
    );
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/locate" element={<Location />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default UseLocationDemo;
