import { useState } from "react";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // (1) Using if-else Statement
  if (isLoggedIn) {
    return <LogoutBtn />;
  } else {
    return <LoginBtn />;
  }

  // (2) Using Ternary Operator
  // return <div>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</div>;

  // (3) Logical Operator
  // Renders content only if condition is true
  // return (
  //   <div>
  //     <h2>Welcome to Web dev Course</h2>
  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>
  //   </div>
  // );

  // (4) Early Return
  // if (!isLoggedIn) {
  //   return <LoginBtn />;
  // }
};

export default App;
