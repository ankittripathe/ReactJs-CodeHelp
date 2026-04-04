import { useContext } from "react";
import { ThemeContext } from "../App";

const Component1 = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <button onClick={toogleTheme}>Change Color</button>
    </div>
  );
};

export default Component1;
