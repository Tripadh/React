import React from "react";
import SecondComp from "./PropContainer/SecondComp";
import UseState from "./UseState/UseState";
import CounterEffect from "./UseEffect/CounterEffect";
import KeyListener from "./Events/KeyListener";
import FormEvents from "./Events/FormEvents";
import Arrays from "./Arrays/Arrays";
const myCar ={
  model: "Mustang",
  year: 2021,
  color: "red",
  delar: "Ford" 
};
function App() {
  return (
    <div className="App">
      <UseState />
      <SecondComp myCar={myCar} />
      <CounterEffect />
      <KeyListener />
      <FormEvents />
      <Arrays/>
    </div>
  );
}

export default App;