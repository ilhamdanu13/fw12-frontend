import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="lg:flex  py-[36px] mb-[48px] lg:px-[136px] px-3">
      <div className=" relative mr-[80px]">
        <span className="text-[30px] text-[#ef91a1] font-Rubik">Cluezzy</span>
      </div>
      <div className="flex-1 items-center content-center pt-[13px] flex lg:block">
        <Link className="pt-[13px] mr-[30px] lg:mr-[81px] font-Mulish font-semibold" to="/">
          Home
        </Link>
        <Link className="pt-[13px] font-Mulish font-semibold mr-[40px] lg:mr-0" to="/all">
          List Movie
        </Link>
        <div className="block lg:hidden items-center pt-[13px]">
          <Link to="/signup" className="rounded-[4px] bg-[#f1554c] px-[25px] py-[8px] text-white text-sm font-bold">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="hidden lg:block items-center pt-[13px]">
        <Link to="/signup" className="rounded-[4px] bg-[#f1554c] px-[25px] py-[8px] text-white text-sm font-bold">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
