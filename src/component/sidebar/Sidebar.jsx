import { AiOutlineHome } from "react-icons/ai";
import { FaRegClipboard } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

import { Link } from "react-router-dom";
import { useSidebarContext } from "../../context/SidebarContext";

// eslint-disable-next-line react/prop-types
const Sidebar = () => {
  const {open, setOpen} = useSidebarContext();
  return (
    <div className={`${open ? "block" : "hidden"} fixed lg:static lg:w-60 lg:block h-screen z-20`}>
      <div className="cursor-pointer lg:hidden w-full h-screen fixed top-0 left-0 bg-slate-700 bg-opacity-20 -z-10"
        onClick={() => {setOpen(false)}}
      ></div>
      <ul className="menu p-4 w-64 min-h-full text-base-content bg-white-color">
        {/* Sidebar content here */}
        <li>
          <Link
            to={"/"}
            className="h-12 flex flex-row justify-start items-center"
          >
            <AiOutlineHome />
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/order"}
            className="h-12 flex flex-row justify-start items-center"
          >
            <FaRegClipboard />
            Orders
          </Link>
        </li>
        <li>
          <Link
            to={"/menu"}
            className="h-12 flex flex-row justify-start items-center"
          >
            <IoFastFoodOutline />
            Menu
          </Link>
        </li>
        <li>
          <Link
            to={"/analytics"}
            className="h-12 flex flex-row justify-start items-center"
          >
            <TbBrandGoogleAnalytics />
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
