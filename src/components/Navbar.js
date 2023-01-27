import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="md:flex  py-[36px] mb-[48px] md:px-[136px] px-3">
      <div className=" relative mr-[80px]">
        <span className="text-[30px] text-[#ef91a1] font-Rubik">Cluezzy</span>
      </div>
      <div className="flex-1 items-center content-center pt-[13px] flex md:block">
        <Link className="pt-[13px] mr-[30px] md:mr-[81px] font-Mulish font-semibold" to="/">
          Home
        </Link>
        <Link className="pt-[13px] font-Mulish font-semibold mr-[40px] md:mr-0" to="/all">
          List Movie
        </Link>
        <div className="block md:hidden items-center pt-[13px]">
          <Link to="/signup" className="rounded-[4px] bg-[#f1554c] px-[25px] py-[8px] text-white text-sm font-bold">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="hidden md:block items-center pt-[13px]">
        <Link to="/signup" className="rounded-[4px] bg-[#f1554c] px-[25px] py-[8px] text-white text-sm font-bold">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
