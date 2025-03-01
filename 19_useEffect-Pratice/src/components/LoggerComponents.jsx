import React, { useEffect, useState } from "react";

const LoggerComponents = () => {
  const [count, setCount] = useState(0);

  // variation-1:- wala hai (runs on every render)
  useEffect(() => {
    console.log("Component render or count changed:", count);
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LoggerComponents;
