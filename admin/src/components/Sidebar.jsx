import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r">
      <div className="flex flex-col gap-2 pt-5 pl-[15%] text-sm">
        <NavLink
          className="flex items-center gap-3 border-r-0 px-3 py-2 rounded-l"
          to="/add"
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border-r-0 px-3 py-2 rounded-l"
          to="/list"
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border-r-0 px-3 py-2 rounded-l"
          to="/orders"
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
