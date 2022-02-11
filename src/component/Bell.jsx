import {FaBell} from 'react-icons/fa'
import {useContext}from 'react'
import UserContext from '../context/UserContext'
export default function Bell() {
  const {notif}=useContext(UserContext)
  return (
    <div className='bell-notif relative cursor-pointer'>
            <FaBell size={22}/>
            <span className='absolute top-[-.25rem] right-[-.25rem] bg-red-700 rounded-full w-4 h-4 flex items-center justify-center text-[.75rem]'>{notif}</span>
    </div>
  )
}
