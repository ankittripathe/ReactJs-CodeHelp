import "../Components/UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <p className="user-name">{props.name}</p>
      <img className="user-img" src={props.photo} alt={props.name} />
      <p className="user-desc">{props.desc}</p>
    </div>
  );
};

export default UserCard;
