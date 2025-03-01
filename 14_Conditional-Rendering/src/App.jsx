import React from "react";
import { useState } from "react";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from './components/LoginBtn'

const App = () => {
  // const [isLoggedIn, setLoggedIn] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  //! (1) using if- else statement
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }
  

  //! (2) Using Ternary operator
  // return (
  // <div>
  //   {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )

  //! (3) Logical Operator
  // return (
  //   <div>
  //     <h2>Welcome to Web dev Course</h2>
  //     <div>
  //       {isLoggedIn && <LogoutBtn/>}
  //     </div>
  //   </div>
  // )

  // ! (4) Early Return
  if (!isLoggedIn) {
    return <LoginBtn />;
  }
};

export default App;
