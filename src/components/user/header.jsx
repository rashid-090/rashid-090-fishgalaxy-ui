import React from "react";
import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { fishLogo } from "../../assets";

const header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img className="h-12 xl:h-16 object-contain" src={fishLogo} alt="" />

          {/* Login button and mobile menu button */}

          <Link to='/login' className="flex gap-2 items-center w-fit px-2 md:px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-mainclr hover:bg-mainhvr focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainclr ">
            <button className="capitalize flex gap-3">
              Login
              <IoLogInOutline className="text-xl" />
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default header;
