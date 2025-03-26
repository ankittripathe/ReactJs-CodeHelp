import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div style={{backgroundColor:'crimson', padding:'20px', margin:'20px'}}>
        <Card name="Ankit Tripathi">
          <h1>Best Web Dev Course</h1>
          <p>Trying to be Consistant in this</p>
          <p>Will Complete the Course Soon</p>
        </Card>
      </div>

      <div style={{backgroundColor: 'orange' , padding:'20px', margin:'20px'}}>
        <Card children="Mein Ek children hu"></Card>
      </div>

      <div style={{backgroundColor: 'green' , padding:'20px', margin:'20px'}}>
        <Card children="Mein Ek children hu">
          Hello Jee, Kaise ho sare // overRight kr dega children ko
        </Card>
      </div>
    </>
  );
};

export default App;
