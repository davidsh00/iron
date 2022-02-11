import {createContext,useState} from 'react'
import userProfile from '../img/profile/small-profile.jpg'
 const UserContext=createContext()
export const UserProvider=({children})=> {
  const[notif,setNotif]=useState(2)
  const [profile,setProfile]=useState(userProfile)
  
  return (
    <UserContext.Provider value={{notif,profile}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContext;