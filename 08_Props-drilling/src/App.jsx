import React, { useState } from "react";
import ChildA from "./Components/ChildA";

const App = () => {
  const [userDetails, setUserdetails] = useState({ name: "Ankit", age: 25 });
  return (
    <div>
      <ChildA user1={userDetails} />
    </div>
  );
};

export default App;
