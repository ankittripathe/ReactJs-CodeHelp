import { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import "./App.css";

//step1: create context and export it
//step2: wrap all the child inside a provider
//step3: pass value
//step4: cousumer ke ander jake consume karlo

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id="container" style={{ backgroundColor: theme === "light" ? "aliceblue" : "black" }}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
export { ThemeContext };
