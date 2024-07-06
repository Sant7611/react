import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const [incrementBy, setIncrementBy] = useState(0);
  
  function increment() {
    // count = count++;
    setCount(count + incrementBy);
  }

  function decrement(){
    setCount(count - 1);
  }

  function increaseIncrement(){
    setIncrementBy(incrementBy + 1);
  }

  function decreaseDecrement(){
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={increment}>Increment</button>
      <div>
        <h1>We are incrementing value by: {incrementBy}</h1>
        <button onClick={increaseIncrement}>increase Increment</button>
        <button onClick={decreaseDecrement}>decrease decrement</button>
      </div>
      
    </div>
  );
}
