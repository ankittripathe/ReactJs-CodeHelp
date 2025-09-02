import UserCard from "./Components/UserCard";
import DhoniPhoto from "./assets/Mahi.jpeg";
import RainaPhoto from "./assets/Raina.jpg";
import WatsonPhoto from "./assets/Watson.webp";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <UserCard
        name="Dhoni"
        desc="Wk-Batman"
        photo={DhoniPhoto}
        style={{ color: "blue", fontSize: "25px" }}
      />
      <UserCard
        name={"Raina"}
        desc="Batting-Allrounder"
        photo={RainaPhoto}
        style={{ color: "white" }}
      />
      <UserCard name="Watson" desc="Allrounder" photo={WatsonPhoto} style={{color:'green'}} />
    </div>
  );
};

export default App;
