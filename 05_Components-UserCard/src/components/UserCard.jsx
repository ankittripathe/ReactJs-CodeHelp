import React from "react";
import msdhoni from "../assets/msdhoni.jpg";
import "./UserCard.css";

const Usercard = () => {
  return (
    <div className="user-container">
      <p className="user-name">Ms Dhoni</p>
      <img className="user-img" src={msdhoni} alt="photo" />
      <p className="user-desc">Former Indian Captain</p>
    </div>
  );
};

export default Usercard;
