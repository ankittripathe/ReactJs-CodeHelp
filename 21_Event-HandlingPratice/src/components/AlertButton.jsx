import React from "react";

const AlertButton = (props) => {
  return (
    <div>
      <button onClick={() => alert(props.message)}>{props.children}</button>
    </div>
  );
};

export default AlertButton;

/*
---- Destructuring ----
const AlertButton = ({message, children})=> {
  return <button onClick={() => alert(message)}> {children} </button>;
};

export default AlertButton;
*/
