import React,{useEffect} from 'react';
import './App.css';
import { requestHomePage } from "./apis/request";
function App() {
  useEffect(()=>{
    requestHomePage().then(res=>{
      console.log(res)
    })
  },[])
  return (
    <div className="App">
     App
    </div>
  );
}

export default App;
