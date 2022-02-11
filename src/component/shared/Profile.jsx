import UserContext from "../../context/UserContext";
import{useContext}from 'react'
function Profile() {
  const {profile}=useContext(UserContext)
  return (
    <div className="user-profile w-full h-full">
        <img src={profile} alt="user-profile" className="w-full h-full rounded-full"/>
    </div>
  );
}

export default Profile;
