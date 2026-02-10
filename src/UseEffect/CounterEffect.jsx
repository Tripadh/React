import { useState, useEffect } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  // useEffect runs when count changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);
  const increment = () => {
      setCount(count + 1);
  }
  const decrement = () => {      setCount(count - 1);
  } 
  const reset = () => {      setCount(0);
  } 

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default CounterEffect;
