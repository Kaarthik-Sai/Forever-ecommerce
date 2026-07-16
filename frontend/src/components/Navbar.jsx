import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const { setShowSearch, showSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo of the forever app"
          className="w-36 cursor-pointer"
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-black" : "text-gray-700"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>Home</p>
              {isActive && (
                <hr className="w-full border-none h-[1.5px] bg-gray-700" />
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>Collection</p>
              <hr
                className={`w-full border-none h-[1.5px] bg-gray-700 ${
                  isActive ? "block" : "hidden"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1" to="/about">
          {({ isActive }) => (
            <>
              <p>About</p>
              <hr
                className={`w-full border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"}`}
              />
            </>
          )}
        </NavLink>

        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          {({ isActive }) => (
            <>
              <p>Contact</p>
              <hr
                className={`w-full border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"}`}
              />
            </>
          )}
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <Link to={"/login"}>
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 cursor-pointer"
          />
          <p className="absolute -right-2 -top-2 w-4 aspect-square flex items-center justify-center bg-black text-white rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menun for small screen */}

      <div
        className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${visible ? "w-2/4 h-screen" : "w-0 h-0"}`}
      >
        <div className="flex flex-col text-gray-600 cursor-pointer">
          <div
            onClick={() => setVisible(!visible)}
            className="flex items-center gap-4 p-3"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(!visible)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
