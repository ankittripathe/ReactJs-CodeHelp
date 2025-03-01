import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card name="Ankit Tripathi">
        <h1>Best Web Dev Course</h1>
        <p>Trying to be consistant in this</p>
        <p>Will complete the course soon</p>
      </Card>

      <Card children="Mein Ek children hu"></Card>

      <Card children="Mein Ek children hu">
        Hello Jee, Kaise ho sare // overRight kr dega children ko
      </Card>
    </div>
  );
};

export default App;
