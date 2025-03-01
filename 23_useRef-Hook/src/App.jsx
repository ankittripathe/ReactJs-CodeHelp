import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // case-1 :- value ko presist krta ho acorss the field (presist value on render)
  let val = useRef(0); 

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val:", val.current);
    setCount(count + 1);
  }

  // runs on every render
  useEffect(() => {
    console.log("runs on every render");
  });

  // case-2:
  let btnRef = useRef()

  function changeColor() {
    btnRef.current.style.backgroundColor = 'red'
    btnRef.current.style.color = 'white'
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button ref={btnRef} onClick={handleIncrement}>Increment</button>

      <br />
      <button onClick={changeColor}>Change color of 2nd Button</button>
    </div>
  );
};

export default App;
