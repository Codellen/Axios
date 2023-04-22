import React from "react";
import Gitaxios from "./Component/Gitaxios";


const App = () => {
  return (
    <Gitaxios></Gitaxios>
  );
};

export default App;










// import React,{useState,useEffect} from "react";
// //How to use USEEFFECT
// const App = ()=>{

//   //lets track score (runs and wickets)
// let[score,setScore] = useState(100);
// let[wickets,setWickets] = useState(0);
// let[overs,setovers] = useState(15);

// const run =()=>{
//   setScore(score+6)
//    setovers(overs+0.1)
// }

// const loss =()=>{
//   setWickets(wickets+1)
//    setovers(overs+0.1)
// }

// //Now until as we using use state the score and wickets both gets re-render, we dont have control
// //to stop re rendering them one of them , So use effect  we can use to do so

// //Syntax of uSEeffect

// useEffect(()=>{
// document.title = `IND ${score}/${wickets} (${overs})`;
// console.log("Rerender")
// },[score])

//   return (
//     <div>
//       <h1>{`IND ${score}/${wickets}`}</h1>
//       <button onClick={run}>Run</button>
//       <button onClick={loss}>Wickets</button>
//     </div>
//   );
// }
// export default App;
