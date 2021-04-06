import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // Your code below

  useEffect(() => {
    const storageBack = localStorage.getItem("count") ?? "";
    setCount(storageBack);
  }, []);

  useEffect(() => {
    localStorage.setItem("count", Number(count));
  }, [count]);

  function handleDecrement() {
    setCount(Number(count) - 1);
  }

  function handleIncrement() {
    setCount(Number(count) + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
