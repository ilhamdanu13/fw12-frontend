import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import http from "../helpers/http";
import { logout as logoutAction } from "../redux/reducers/auth";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const OrderHistory = () => {
  const token = useSelector((state) => state?.auth?.token);
  const decode = jwtDecode(token);
  const { id } = decode;
  const [bio, setBio] = React.useState({});
  const [movieDetail, setMovieDetail] = React.useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    getMovieDetail().then((data) => {
      setMovieDetail(data);
    });
  }, []);

  React.useEffect(() => {
    getBio().then((data) => {
      setBio(data?.results);
    });
  }, [id]);

  const getBio = async () => {
    const { data } = await http(token).get("/profile/" + id);
    return data;
  };

  const getMovieDetail = async () => {
    const { data } = await axios.get("http://localhost:8888/movies/1");
    return data;
  };

  const handlerLogout = () => {
    setTimeout(() => {
      dispatch(logoutAction());
      navigate("/signin");
    }, 2000);
  };

  return (
    <div>
      <NavbarUser />
      <div className="flex bg-[#F5F6F8] px-[79px]">
        <div className="pt-[56px]">
          <div className="border-1 bg-white rounded-[24px]">
            <div className="p-[40px]">
              <div className="text-[#4E4B66] text-[16px]">INFO</div>
              <div className="pt-[32px]">
                {bio?.picture ? (
                  <img className="w-[136px] h-[136px] rounded-[50%] mb-3 shadow-lg" src={"https://res.cloudinary.com/fw12/image/upload/v1674621799/" + bio.picture} alt="Profile" />
                ) : (
                  <img className="w-[136px] h-[136px] rounded-[50%] mb-3 shadow-lg" src={"https://res.cloudinary.com/fw12/image/upload/v1674616077/Cluezzy/User_phom73.png"} alt="Profile" />
                )}
              </div>
              <div className="text-[#14142B] text-[20px] text-center">{bio.firstName + " " + bio.lastName}</div>
              <div className="text-[14px] text-[#4E4B66] text-center  tracking-[.75px] leading-[24px]">Moviegoers</div>
            </div>
            <hr className="mb-[20px]" />
            <div className="flex justify-center pb-[25px]">
              <button onClick={handlerLogout} className="border-1 bg-[#f1554c] rounded-[16px] text-white  px-[70px] py-[8px] text-[16px]">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="pl-[32px]">
          <div className="pt-[56px]">
            <div className="border-1 bg-white rounded-[16px] w-[900px]">
              <div className="py-[25px] flex">
                <Link to="/profile" className="text-[18px] tracking-[.75] leading-[34px] text-[#AAAAAA] mr-[56px] pl-[48px]">
                  Account Settings
                </Link>
                <Link className="text-[18px] tracking-[.75] leading-[34px] text-[#14142B]">Order History</Link>
              </div>
              <div className="pl-[240px]">
                <hr className=" w-[105px] pl-[25px] border-2 border-[#f1554c] rounded-[4px]" />
              </div>
            </div>
          </div>
          <div className="pt-[56px]">
            <div className="border-1 bg-white rounded-[16px] w-[900px] mb-[24px]">
              <div className="pl-[32px] pr-[67px] pt-[40px] mb-[49px] flex ">
                <div className="flex-1">
                  <div className=" text-[#AAAAAA] text-[14px]">Tuesday, 07 July 2020 - 04:30pm</div>
                  <div className="text-[24px] font-semibold">Spider-Man: Homecoming</div>
                </div>
                <div className="pt-[15px]">
                  <img className="" src={require("../assets/images/cineone.png")} alt="cineone" />
                </div>
              </div>
              <hr className="mb-[32px]" />
              <div className="flex pl-[32px] pr-[67px] pb-[32px]">
                <div className="border-1 bg-[#00BA88] py-[10px] px-[50px] rounded-[4px] text-white mr-[500px]">Ticket in active</div>
                <Link to="" className="text-[#AAAAAA] text-[18px] pt-[8px] ">
                  See Details
                </Link>
              </div>
            </div>
            <div className="border-1 bg-white rounded-[16px] w-[900px] mb-[24px]">
              <div className="pl-[32px] pr-[67px] pt-[40px] mb-[49px] flex ">
                <div className="flex-1">
                  <div className=" text-[#AAAAAA] text-[14px]">Monday, 14 June 2020 - 02:00pm</div>
                  <div className="text-[24px] font-semibold">Avengers: End Game</div>
                </div>
                <div className="pt-[10px]">
                  <img className="" src={require("../assets/images/ebu.png")} alt="ebu" />
                </div>
              </div>
              <hr className="mb-[32px]" />
              <div className="flex pl-[32px] pr-[67px] pb-[32px]">
                <div className="border-1 bg-[#6E7191] py-[10px] px-[50px] rounded-[4px] text-white mr-[530px]">Ticket used</div>
                <Link to="" className="text-[#AAAAAA] text-[18px] pt-[8px] ">
                  See Details
                </Link>
              </div>
            </div>
            <div className="border-1 bg-white rounded-[16px] w-[900px] mb-[72px]">
              <div className="pl-[32px] pr-[67px] pt-[40px] mb-[49px] flex ">
                <div className="flex-1">
                  <div className=" text-[#AAAAAA] text-[14px]">Monday, 10 March 2020 - 04:00pm</div>
                  <div className="text-[24px] font-semibold">Thor: Ragnarok</div>
                </div>
                <div className="pt-[10px]">
                  <img className="" src={require("../assets/images/ebu.png")} alt="ebu" />
                </div>
              </div>
              <hr className="mb-[32px]" />
              <div className="flex pl-[32px] pr-[67px] pb-[32px]">
                <div className="border-1 bg-[#6E7191] py-[10px] px-[50px] rounded-[4px] text-white mr-[530px]">Ticket used</div>
                <Link to="" className="text-[#AAAAAA] text-[18px] pt-[8px] ">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default OrderHistory;
