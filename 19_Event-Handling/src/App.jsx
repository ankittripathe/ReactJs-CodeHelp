import "./App.css";

const App = () => {
  // (1) h1
  const handleMouseOver = () => {
    alert("MouseOver on Heading-1");
  };

  // (2) button
  const handleClickBtn = () => {
    alert("clicked on Button");
  };

  // (3) input
  const handleInputChange = (evt) => {
    console.log("Value till Now:", evt.target.value);
  };

  // (4) form
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    // I am writing my custom behaviour down
    alert("Form Submitted");
  };

  return (
    <div className="app-container">
      <h1 onMouseOver={handleMouseOver} style={{ color: "blue" }}>
        Heading 1
      </h1>

      <button onClick={handleClickBtn}>click Me</button>

      {/* form */}
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
