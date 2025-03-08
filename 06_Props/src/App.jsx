import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import DhoniPic from "./assets/DhoniPic.jpeg";
import RainaPic from "./assets/RainaPic.jpg";
import MaccullumPic from "./assets/MaccullumPic.jpg";

const App = () => {
  return (
    <div className="container">
      <UserCard
        name="Ms Dhoni"
        disc="Indian Cricketer"
        image={DhoniPic}
        style={{ "border-radius": "10px" }}
      />

      <UserCard
        name="Suresh Raina"
        disc="Indian Cricketer"
        image={RainaPic}
        style={{ "border-radius": "10px" }}
      />

      <UserCard
        name="Brand McCullum"
        disc="New-Zealand Cricketer"
        image={MaccullumPic}
        style={{ "border-radius": "10px", color: "blue", "font-weight": "600" }}
      />
    </div>
  );
};

export default App;
