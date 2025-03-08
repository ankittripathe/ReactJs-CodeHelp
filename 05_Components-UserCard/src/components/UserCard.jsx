import React from "react";
import ankit_photo from '../assets/ankit_photo.jpeg'
import './UserCard.css'

const Usercard = () => {
  return (
    <div className="user-container">
      <p className="user-name">Ankit Tripathi</p>
      <img className="user-img" src={ankit_photo} alt="photo" />
      <p className="user-desc">Description of Ankit Tripathi</p>
    </div>
  );
};

export default Usercard;
