import React from "react";

const App = () => {
  function hanlderClick(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <>
      <div>
        <h3>Event handling with Argument Passed</h3>
      </div>

      <div style={{textAlign: 'center', margin:'20px'}}>
        <button
          onClick={() => {
            hanlderClick("React Developer");
          }}
        >
          click me
        </button>
      </div>
    </>
  );
};

export default App;
