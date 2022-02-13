import Profile from "./shared/Profile";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Bell from "./Bell";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Header() {
  return (
    <header className="w-full bg-gray-800 text-white  flex justify-between items-center py-2 px-5 sm:px-16 rounded-md h-16 relative">
      <HeaderLinks />
      <HeaderPanel />
    </header>
  );
}

const HeaderLinks = () => {
  let checkBtn = 0;
  const changeState = () => {
    const elem = document.querySelector(".header-links");
    console.log(elem);
    if (checkBtn) {
      checkBtn = 0;
      elem.style.bottom = 0;
      elem.style.padding = 0;
      return null;
    }
    checkBtn = 1;
    elem.style.bottom = "auto";
    elem.style.padding = "1rem";
  };
  return (
    <div className="header-navbar ">
      <label htmlFor="openNav" className="md:hidden">
        <AiOutlineMenu
          className={`cursor-pointer `}
          id="toggleHeaderLinks"
          size={22}
        />
      </label>
      <input
        type="checkbox"
        className="hidden w-6 h-6"
        id="openNav"
        onChange={changeState}
      ></input>

      <ul
        className={`header-links  flex flex-col gap-1 md:shadow-none shadow-[0_5px_10px_1px_rgba(0,0,0,.3)] absolute w-full bg-white  left-0 top-[100%]  bottom-0 p-0 text-black md:static md:flex-row md:p-0 md:bg-inherit md:text-white overflow-hidden`}
      >
        <LinksItem item={"dashboard"} isActive />
        <LinksItem item={"site"} />
        <LinksItem item={"process"} />
        <LinksItem item={"store"} />
      </ul>
    </div>
  );
};
function LinksItem({ item, isActive }) {
  return (
    <li
      className={`mr-2 p-2 rounded-md capitalize hover:bg-gray-900 hover:text-white ${
        isActive && "active"
      }`}
    >
      <a href="www.google.com">{item}</a>
    </li>
  );
}
const HeaderPanel = () => {
  const { notif } = useContext(UserContext);
  return (
    <div className="flex justify-center items-center gap-8">
      <div className="header-profile w-10 relative group">
        <Profile />

        <FaAngleDown
          size={12}
          className="absolute right-0 bottom-0 translate-x-[50%] cursor-pointer"
        />
        <HoverBox className={"mt-4"}>
          <li className=" hover:bg-gray-800  hover:text-white p-4 mx-1 ">
            <a href="www.google.com">view profile</a>
          </li>
          <li className=" hover:bg-gray-800 hover:text-white p-4 mx-1">
            <a href="www.google.com">change user setting</a>
          </li>
          <li className=" hover:bg-gray-800 hover:text-white p-4 mx-1">
            <a href="www.google.com">Log Out</a>
          </li>
        </HoverBox>
      </div>
      <div className="header-bell py-4 group relative">
        <Bell />
        <HoverBox isDisable={!notif} className={'translate-x-[10%] right-0'}
        >
          <li className=" hover:bg-gray-800  hover:text-white p-4 mx-1 ">
            <a href="www.google.com">
              you have {notif} new Message{notif > 1 && "s"}
            </a>
          </li>
        </HoverBox>
      </div>
    </div>
  );
};
const HoverBox = ({ isDisable,className,children }) => {
if(isDisable)return null;
  return (
    <ul
      className={`bg-opacity-90 bg-white text-black   capitalize absolute whitespace-nowrap invisible top-full mt-2 transition-all delay-400 ease-linear duration-200 text-center  opacity-0 group-hover:visible group-hover:opacity-100 right-0 text-sm translate-x-[50%] shadow-lg ${className}`}
    >
      {children}
    </ul>
  );
};

export default Header;
