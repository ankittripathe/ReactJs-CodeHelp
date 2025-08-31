import React from "react";

const App = () => {
  const instructor = "Love Babbar";
  return (
    <div>
      <h1 style={{color:"blue"}}>My first ReactApp</h1>
      <h2 style={{ color: "red" }}>Code Help</h2>
      <h3>{instructor}</h3>
    </div>
  );
};

export default App;
