import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b bg-white">
  <img src={assets.logo} alt="" className="w-36" />

  <button className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm">
    Logout
  </button>
</div>
  );
};

export default Navbar;
