import Component1 from "./Components/Component1";
import { useState } from "react";
import { createContext } from "react";

// Created theme context
const ThemeContext = createContext();
export { ThemeContext };

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id="container" style={{backgroundColor: theme==='light'? 'aliceblue': 'black'}}>
          <Component1 />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
