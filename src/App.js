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
import PostApi from "./ApiCall/PostApi";
import GetApi from "./ApiCall/GetApi";

function App() {
  return (
    <div className="App">
      <PostApi />
      <GetApi />
    </div>
  );
}

export default App;
