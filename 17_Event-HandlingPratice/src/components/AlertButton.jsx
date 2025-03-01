import React from "react";

const AlertButton = (props) => {
  return <button onClick={() => alert(props.message)}>{props.children}</button>;
};

export default AlertButton;




/* 
  || Using de-structuring method || 

const AlertButton = ({message, children})=> {
  return <button onClick={() => alert(message)}> {children} </button>;
};

export default AlertButton;
*/
