import { NavLink } from "react-router-dom";
import { FaAngleDown, FaBars } from "react-icons/fa";
import logo from "../assets/logo 4.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-around bg-white p-4 text-gray-800">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div id="logo" className="w-48">
          <img src={logo} alt="" />
        </div>

        {/* Navigation Items */}
        <div className="hidden space-x-4 lg:flex">
          <div className="cursor-pointer rounded-xl px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex items-center gap-2">
              Products <FaAngleDown />
            </NavLink>
          </div>
          <div className="cursor-pointer rounded-xl px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex items-center gap-2">
              Solutions <FaAngleDown />
            </NavLink>
          </div>
          <div className="cursor-pointer rounded-xl px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex items-center gap-2">
              Developers <FaAngleDown />
            </NavLink>
          </div>
          <div className="cursor-pointer rounded-xl px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex items-center gap-2">
              Businesses <FaAngleDown />
            </NavLink>
          </div>
          <div className="cursor-pointer rounded-xl px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex items-center gap-2">
              Pricing <FaAngleDown />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-12">
        {/* Login and Signup */}
        <div className="flex space-x-4">
          <div className="cursor-pointer rounded-xl px-4 py-2 font-semibold text-gray-500 hover:bg-slate-200">
            Login
          </div>
          <div className="rounded-xl bg-primary-blue px-4 py-2 font-semibold text-white hover:bg-primary-light-blue">
            Signup
          </div>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="lg:hidden">
          <FaBars className=" cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* Collapsible Navigation Items for smaller screens */}
      {isOpen && (
        <div className="absolute top-0 z-10 mt-24 flex w-full flex-col bg-white lg:hidden">
          <div className="w-full cursor-pointer px-2 py-3 hover:bg-slate-200 ">
            <NavLink to="" className="flex flex-row justify-center items-center gap-2">
              Products <FaAngleDown />
            </NavLink>
          </div>
          <div className="w-full cursor-pointer px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex justify-center items-center gap-2">
              Solutions <FaAngleDown />
            </NavLink>
          </div>
          <div className="w-full cursor-pointer px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex justify-center items-center gap-2">
              Developers <FaAngleDown />
            </NavLink>
          </div>
          <div className="w-full cursor-pointer px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex justify-center items-center gap-2">
              Businesses <FaAngleDown />
            </NavLink>
          </div>
          <div className="w-full cursor-pointer px-2 py-3 hover:bg-slate-200">
            <NavLink to="" className="flex justify-center items-center gap-2">
              Pricing <FaAngleDown />
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Header;
