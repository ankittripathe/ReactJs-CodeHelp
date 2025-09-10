import { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <button onClick={toogleTheme}>Change Theme</button>
    </div>
  );
};

export default ChildC;
