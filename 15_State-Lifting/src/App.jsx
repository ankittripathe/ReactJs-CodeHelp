import Card from "./components/Card";
import { useState } from "react";

// parent components
const App = () => {
  // create state
  // manage state
  // change state
  // sabhi child me state koo sync karwa denge
  const [name, setName] = useState("");

  return (
    <div>
      <Card title="Card1" userName={name} setNameKaro={setName} />
      <Card title="Card2" userName={name} setNameKaro={setName} />
      <p>{name}</p>
    </div>
  );
};

export default App;

/* Notes: Lifting state means moving the state from a child component up to the parent component, so multiple children can share and use the same data.

🔹 Why used?
It’s used to avoid duplicate states,
keep data synchronized,
and let components communicate through the parent.
*/