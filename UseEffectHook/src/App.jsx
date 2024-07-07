import React,{useState,useEffect} from 'react';
import ReactDOM from "react-dom/client";
import './App.css'

function Timer(){

const[count,setCount]=useState(0);

useEffect(()=>{setTimeout(() => {
  setCount((count)=>count+1);

}, 1000);
  return()=> clearTimeout(Timer);
},[count]);
return <h1>I have rendered {count} times!</h1>;
}
function App(){
  const[showTimer,setShowTimer]=useState(false);

  return (
    <div className="main">
      <button className="start" onClick={()=>{setShowTimer(true)}}>Start</button>
      <button className="stop" onClick={()=>{setShowTimer(false)}}>Stop</button>
      {showTimer && <Timer/>}
    </div>
  );
}
export default App;
