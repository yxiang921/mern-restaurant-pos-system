import { AiOutlineHome } from "react-icons/ai";
import { FaRegClipboard } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoMenuOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-color">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button lg:hidden bg-neutral-200 absolute left-4 top-4"
        >
          <IoMenuOutline />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full text-base-content bg-white-color">
          {/* Sidebar content here */}
          <li>
            <Link to={"/"} className="h-12 flex flex-row justify-start items-center">
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link to={"/order"} className="h-12 flex flex-row justify-start items-center">
              <FaRegClipboard />
              Orders
            </Link>
          </li>
          <li>
            <Link to={"/menu"} className="h-12 flex flex-row justify-start items-center">
              <IoFastFoodOutline />
              Menu
            </Link>
          </li>
          <li>
            <Link to={"/analytics"} className="h-12 flex flex-row justify-start items-center">
              <TbBrandGoogleAnalytics />
              Analytics
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
