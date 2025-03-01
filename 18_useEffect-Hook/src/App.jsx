import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);  // multiple dependencies ke liye

  // first -> side effect function
  // second -> clean-up function
  // third -> comma separated dependency list

  //! Variation:-1 => runs on every render
  // useEffect(() => {
  //   alert("I will run on each render");
  // });


  //! Variation:-2 => runs on only first render
  // useEffect(() => {
  //   alert('I will wun on only 1st render')
  // }, [])

  //! Variation:-3 => runs
  // useEffect(() => {
  //   alert('I will run every time when count is updated')
  // }, [count])

  //! Variation:-4 => multiple dependencies
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count, total]);

  //! Variation:-5 => Ess baar cleanup function
  useEffect(() => {
    alert("Count is updated");

    return () => {
      alert("count is unmounted from UI");
    };
  }, [count]);


  // function-1
  function handleClickCount() {
    setCount(count + 1);
  }

  // function-2
  function handleClickTotal() {
    setTotal(total + 1);
  }

  return (
    <div className="container">
      <div>
        <h3> Count : {count}</h3>
        <button onClick={handleClickCount}>update Count</button>
      </div>

      <div>
        <h3>Total : {total}</h3>
        <button onClick={handleClickTotal}>update Total</button>
      </div>
    </div>
  );
};

export default App;
