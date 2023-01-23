import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";

const NavbarUser = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handlerLogout = () => {
    setTimeout(() => {
      dispatch(logoutAction());
      navigate("/signin");
    }, 3000);
  };
  return (
    <nav className="flex flex-1 pt-[36px] mb-[80px] px-[136px] items-center">
      <div className=" mr-[80px]">
        <span className="text-[30px] text-[#ef91a1] font-Rubik">Cluezzy</span>
      </div>
      <div className="flex-1 items-center content-center pt-[13px]">
        <Link className="pt-[13px] mr-[81px] font-Mulish font-semibold " to="/index">
          Home
        </Link>
        <Link className="pt-[13px] font-Mulish font-semibold" to="/all">
          List Movie
        </Link>
      </div>
      <div className="flex  rounded-[10px] items-center py-[8px] px-[16px] mr-[50px] group">
        <div className="text-[10px] text-[#a0a3bd]">
          <img className="w-[18px]" src={require("../assets/images/search.png")} alt="Search" />
        </div>
        <div className="duration-500 w-0 overflow-hidden group-hover:w-[200px] group-hover:ml-[8px]">
          <input placeholder="Search..." className="border-0 focus:outline-none bg-unset font-bold p-[8px] text-[#4E4B66]" />
        </div>
      </div>

      <div className=" items-center pt-[13px] group">
        <img className="w-[56px]" src={require("../assets/images/Profile.png")} alt="Profile" />
        <div className="h-0 overflow-hidden duration-500 group-hover:h-[100px] absolute ">
          <div className="font-Mulish  text-[#4E4B66] mb-[15px] cursor-pointer" onClick={handlerLogout}>
            Logout
          </div>

          <Link className=" font-Mulish  text-[#4E4B66]" to="/profile">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
