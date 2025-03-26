import { useState } from "react";
import InputComponent from "./components/InputComponent";
import DisplayComponent from "./components/DisplayComponent";

function App() {
  const [text, setText] = useState(""); // Lifted state

  return (
    <div className="p-4">
      <InputComponent text={text} setText={setText} />
      
      <DisplayComponent text={text} />
    </div>
  );
}

export default App;
