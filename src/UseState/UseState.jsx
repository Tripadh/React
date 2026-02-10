import React from "react";
import { useState } from "react";
const UseState = () => {
  const [city, setCity] = useState("Hyderabad");
  console.log(city);
  return (
    <div>   
        <h1>UseState Hook</h1>  
        <h2>{city}</h2>
        <button onClick={() => setCity("Bangalore")}>Change City</button>
    </div>
  );
}
export default UseState;    