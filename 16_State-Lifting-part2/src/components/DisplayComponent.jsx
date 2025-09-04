import React from "react";

const DisplayComponent = ({text}) => {
  return (
    <div>
      <p className="mt-2 text-lg font-bold">You typed: {text}</p>
    </div>
  )
};

export default DisplayComponent;
