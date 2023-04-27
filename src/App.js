import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DidMount from "./ReactLifeCycle/DidMount";
import DidUpdate from "./ReactLifeCycle/DidUpdate";
// import Fcomp from './Components/FunComp';
// import ClassComp from './Components/ClassComp';
// import Photo from './Components/Photos';
// import FunctionalState from './UseState/FuncState';
// import ClassState from './UseState/ClassState';
// import UseEffectDemo from './Hooks/UseEffectDemo';
// import Parent from "./PropsDemo/Parent";
// import UseRefDemo from "./Hooks/UseRefDemo";
// import UseReducerDemo from "./Hooks/UseReduceDemo";
// import MemoDemo from "./Hooks/MemoDemo";
// import UseHooks from "./Hooks/UseHooks";
// import CreateContextDemo from "./Hooks/CreateContextDemo";
// import PostApi from "./ApiCall/PostApi";
// import GetApi from "./ApiCall/GetApi";
// import Create from "./CRUDapi/Create";
// import Edit from "./CRUDapi/Edit";
// import Show from "./CRUDapi/Show";
// import Login from "./CRUDapi/Login";
import LoginForm from "./RegiForm/LoginForm";
import SnapshotbfUpdate from "./ReactLifeCycle/SnapshotbfUpdate";
import ParentClass from "./ReactLifeCycle/ParentClass";
import { useEffect, useState } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000); 
  }, []);

  return (
    <div className="App">
      {/* <Create />
      <Show /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />}></Route>
          <Route path="/show" element={<Show />}></Route>
          <Route path="/edit/:ids" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter> */}
      <LoginForm />
      {/* <DidMount /> */}
      {/* <DidUpdate /> */}
      {/* <SnapshotbfUpdate /> */}
      {/* <ParentClass /> */}
      
        
    </div>
  );
}

export default App;
