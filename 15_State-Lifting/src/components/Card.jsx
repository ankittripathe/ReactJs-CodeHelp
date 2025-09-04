import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(evt) => props.setName(evt.target.value)} />
      
      <p>
        Name state variable ki value inside {props.title} : {props.name}
      </p>
    </div>
  );
};

export default Card;
