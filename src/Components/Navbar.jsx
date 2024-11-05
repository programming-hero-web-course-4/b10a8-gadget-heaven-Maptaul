import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 text-white bg-[#9538E2] py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-purple-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/dashboard">Dashboard</Link>
          </ul>
        </div>
        <Link to="/" className=" text-xl md:text-2xl font-extrabold">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal text-xl px-1 gap-8">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/dashboard">Dashboard</Link>
        </ul>
      </div>
      <div className="navbar-end text-3xl gap-4">
        <button className="bg-white text-black  rounded-full p-2">
          <CiShoppingCart />
        </button>
        <button className="bg-white text-black  rounded-full p-2">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
