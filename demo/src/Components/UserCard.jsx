import DhoniPhoto from '../assets/msdhoni.jpg'
import '../Components/UserCard.css'

const UserCard = () => {
  return (
    <div className='user-container'>
      <p className="user-name">MS Dhoni</p>
      <img className="user-img" src={DhoniPhoto} alt="Picture" />
      <p className="user-desc">Former Ind Captain</p>
    </div>
  )
};

export default UserCard
