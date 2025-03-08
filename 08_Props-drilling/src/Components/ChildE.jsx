import React from "react";

const ChildE = (props) => {
  return (
    <div>
      <h2>User Details of Child E</h2>
      <p style={{ backgroundColor: "orangered" }}>
        {`Hello ${props.user5.name} again!`}
      </p>
    </div>
  );
};

export default ChildE;


/*
 ***  Destructuring krunga toh aaise hoga. Bina destructuring ke upar kiya gaya hai. ***
 
const ChildE = ({user5}) => {
  return (
    <div>
      <h2>User Details of Child E</h2>
      <h2>{`Hello ${user5.name} again!`}</h2>
    </div>
  );
};

*/
