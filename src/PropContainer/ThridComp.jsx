import React from "react";  
const ThridComp = (props) => {
    const {model, year, color, delar} = props.myCar;
  return (      
    <div> 
        <div>{model}</div>
        <div>{year}</div>   
        <div>{color}</div>
        <div>{delar}</div>
    </div>
  );
}   
export default ThridComp;