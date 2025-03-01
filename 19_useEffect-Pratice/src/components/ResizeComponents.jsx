import React, { useEffect, useState } from "react";

const ResizeComponents = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handlerResize = () => {
      console.log("Event Listner Added");
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlerResize);

    return () => {
      console.log("Event Listner removed");
      window.removeEventListener("resize", handlerResize);
    };
  }, []);
  //it will run on first render

  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  );
};

export default ResizeComponents;
