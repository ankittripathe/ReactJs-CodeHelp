import React, { useState } from "react";
import { createContext } from "react";
import ChildA from "./components/ChildA";

//step1:- create context
const UserContext = createContext();
//step2:- wrap all the child inside a provider
//step3:- pass value
//step4:- cousumer ke ander jake consume karlo

const App = () => {
  const [user, setUser] = useState({name:'Ankit'})

  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
};

export default App;

export {UserContext}
