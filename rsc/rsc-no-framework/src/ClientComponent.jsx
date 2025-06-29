"use client"; // always this here 

import { useState } from "react";

export default function ClientComponent(){
  console.log("rendering ClientComponent")
  const [counter, setCounter] = useState(0)

  // fieldset is for doodle.css
  return (
    <fieldset> 
      <legend>Client Component</legend>
      <p>Counter {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </fieldset>
  )
}