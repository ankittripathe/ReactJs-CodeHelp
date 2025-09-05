import { useState } from "react";
import Greet from "./components/Greet";
import Greeting from "./components/Greeting";
import Notification from "./components/Notification";

const App = () => {
  // const [isLoggedIn, setLoggedIn] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <div>
      <Greet isLoggedIn={isLoggedIn} />
      <Greeting isLoggedIn={isLoggedIn} />
      <Notification isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
