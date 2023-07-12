// useHistory is replaced by useNavigate in r-r-d-6

// This is a React Router v5 app
// import { useHistory } from "react-router-dom";

// function App() {
//   const { go, goBack, goForward } = useHistory();

//   return (
//     <>
//       <button onClick={() => go(-2)}>
//         Go 2 pages back
//       </button>
//       <button onClick={goBack}>Go back</button>
//       <button onClick={goForward}>Go forward</button>
//       <button onClick={() => go(2)}>
//         Go 2 pages forward
//       </button>
//     </>
//   );
// }

// This is a React Router v6 app
// import { useNavigate } from "react-router-dom";

// function App() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <button onClick={() => navigate(-2)}>
//         Go 2 pages back
//       </button>
//       <button onClick={() => navigate(-1)}>Go back</button>
//       <button onClick={() => navigate(1)}>
//         Go forward
//       </button>
//       <button onClick={() => navigate(2)}>
//         Go 2 pages forward
//       </button>
//     </>
//   );
// }

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useHistory,
//   useNavigate,
// } from "react-router-dom";

// const UseHistoryDemo = () => {
//   const Home = () => {
//     return <h1>Home Page</h1>;
//   };

//   const HistoryPage = () => {
//     const navigate = useNavigate();

//     console.log(navigate);

//     return (
//       <>
//         <p>History</p>
//         <h1>History</h1>
//       </>
//     );
//   };

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/history" element={<HistoryPage />}></Route>
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default UseHistoryDemo;
