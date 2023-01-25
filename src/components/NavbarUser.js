import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import jwtDecode from "jwt-decode";
import http from "../helpers/http";

const NavbarUser = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [bio, setBio] = React.useState({});
  const decode = jwtDecode(token);
  const { id } = decode;
  const navigate = useNavigate();

  React.useEffect(() => {
    getBio().then((data) => {
      setBio(data?.results);
    });
  }, [id]);

  const getBio = async () => {
    const { data } = await http(token).get("/profile/" + id);
    return data;
  };

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
        <Link className="pt-[13px] mr-[81px] font-Mulish font-semibold " to="/">
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
        {bio?.picture ? (
          <img className="w-[28px] h-[28px] rounded-[50%] mb-3 shadow-lg" src={"https://res.cloudinary.com/fw12/image/upload/v1674621799/" + bio.picture} alt="Profile" />
        ) : (
          <img className="w-[28px] h-[28px] rounded-[50%] mb-3 shadow-lg" src={"https://res.cloudinary.com/fw12/image/upload/v1674616077/Cluezzy/User_phom73.png"} alt="Profile" />
        )}
        <div className="h-0 overflow-hidden duration-500 group-hover:h-[100px] absolute ">
          <div className="font-Mulish  text-[#4E4B66] mb-[15px] pt-[10px] cursor-pointer hover:font-bold duration-500 hover:shadow-md" onClick={handlerLogout}>
            Logout
          </div>

          <Link className=" font-Mulish  text-[#4E4B66] hover:font-bold duration-500 hover:shadow-md" to="/profile/">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
