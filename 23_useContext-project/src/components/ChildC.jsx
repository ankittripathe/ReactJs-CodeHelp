import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  function toogleTheme(){
    if(theme === 'light'){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }

  return (
    <div>
      <button onClick={toogleTheme}>Change Theme</button>
    </div>
  )
};

export default ChildC;
