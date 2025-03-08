import React from "react";
import AlertButton from "./components/AlertButton";

const App = () => {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>

      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
};

export default App;
