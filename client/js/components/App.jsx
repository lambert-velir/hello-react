import React from "react";
import Hello from "./Hello/Hello.jsx";
import Counter from "./Counter/Counter.jsx";


export default function App(props){
  return (
    <div>
      <Hello name="React" />
      <Counter />
      <Hello name="Velir" />
    </div>
  );
}
