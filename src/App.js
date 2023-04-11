import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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

function App() {
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
      
    </div>
  );
}

export default App;
