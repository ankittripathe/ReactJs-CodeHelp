import React from "react";
import './App.css'

const App = () => {
  //! (1) h1
  function handleMouseOver() {
    alert("MouseOver on Heading-1");
  }

  //! (2) button
  function handleClick() {
    alert("clicked on button");
  }

  //! (3) input
  function handleInputChange(evt) {
    console.log("Value till now:", evt.target.value);
  }

  //! form
  function handlerSubmit(evt){
    evt.preventDefault()
    // I am writing my custom behaviour down
    alert('Form Submitted')
  } 

  return (
    <div>
      <h1
        onMouseOver={handleMouseOver}
        style={{ marginBlock: "20px", color: "blue" }}
      >
        Heading-1
      </h1>

      <button onClick={handleClick} style={{marginBlock:'20px'}}>click me</button>

      <form onSubmit={handlerSubmit}>
        <input type="text" placeholder="Enter your Name" onChange={handleInputChange}  />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
