import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex  py-[36px] mb-[48px] px-[136px] ">
      <div className=" relative mr-[80px]">
        <span className="text-[30px] text-[#ef91a1] font-Rubik">Cluezzy</span>
      </div>
      <div className="flex-1 items-center content-center pt-[13px]">
        <Link className="pt-[13px] mr-[81px] font-Mulish font-semibold" to="/index">
          Home
        </Link>
        <Link className="pt-[13px] font-Mulish font-semibold" to="/all">
          List Movie
        </Link>
      </div>
      <div className=" items-center pt-[13px]">
        <Link to="/signup" className="rounded-[4px] bg-[#f1554c] px-[25px] py-[8px] text-white text-sm font-bold">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
