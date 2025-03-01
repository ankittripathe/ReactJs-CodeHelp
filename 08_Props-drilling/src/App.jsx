import React, { useState } from "react";
import ChildA from "./Components/ChildA";

const App = () => {
  const [userdetails, setUserdetails] = useState({ name: "Ankit", age: 25 });
  return (
    <div>
      <ChildA user1={userdetails} />
    </div>
  );
};

export default App;
