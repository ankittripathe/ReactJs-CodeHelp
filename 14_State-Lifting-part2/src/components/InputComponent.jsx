import React from "react";

const InputComponent = (props) => {
  return (
    <input
      type="text"
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
      className="border p-2 rounded-md w-full text-black"
      placeholder="Type something..."
    />
  );
};

export default InputComponent;
