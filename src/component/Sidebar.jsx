import { BsBuilding } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { GiTempleDoor } from "react-icons/gi";
import { RiExchangeFill, RiSettings3Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="sidebar-wrapper z-100">
    <section className="sidebar md:fixed flex md:flex-col py-4 md:py-0 justify-around   z-100 md:justify-start  md:h-screen bg-white text-black md:w-16 items-center gap-3" style={{boxShadow:"0 -8px 30px 0px rgba(0,0,0,.3)"}}>
      <div className="sidebar-brand-icon hidden md:block my-4 text-red-600">
        <BsBuilding size={28} />
      </div>
      <SidebarIcon
        toolbar={"home"}
        link="home"
        icon={<AiFillHome size={28} />}
      />
      <SidebarIcon toolbar={"activity"} icon={<FiActivity size={28} />} />
      <SidebarIcon icon={<GiTempleDoor size={28} />} />
      <SidebarIcon toolbar={"change"} icon={<RiExchangeFill size={28} />} />
      <SidebarIcon toolbar={"userAccount"} icon={<FaUserAlt size={28} />} />
      <SidebarIcon toolbar={"setting"} icon={<RiSettings3Fill size={28} />} />
    </section>
    </div>
  );
}
function SidebarIcon({ icon, link = "nolink", toolbar = "toolbar" }) {
  return (
    <div className="sidebar-icon  relative flex justify-center items-center h-10 w-10  hover:bg-gray-300 rounded-xl  transition-all  group ">
      <a href={link}>
        {icon}
        <span className="sidebar-toolbar bg-black text-white transition-all  absolute   z-50 md:left-[100%] bottom-[100%] mb-5 right-[50%] md:right-auto translate-x-[50%] md:ml-5 md:mb-0 md:top-[50%] md:bottom-auto md:translate-y-[-50%] md:translate-x-[0] py-2 px-4 scale-0 group-hover:scale-100">
          {toolbar}
        </span>
      </a>
    </div>
  );
}
export default Sidebar;
