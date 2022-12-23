import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const OrderHistory = () => {
  const [movieDetail, setMovieDetail] = React.useState({});
  React.useEffect(() => {
    getMovieDetail().then((data) => {
      setMovieDetail(data);
    });
  }, []);

  const getMovieDetail = async () => {
    const { data } = await axios.get("http://localhost:8888/movies/1");
    return data;
  };

  return (
    <div>
      <nav className="flex flex-1 pt-[36px] px-[79px]">
        <div>
          <img className="mr-[81px]" src={require("../assets/images/navlogo.png")} alt="navlogo" />
        </div>
        <div className="flex-1 items-center content-center pt-[13px]">
          <Link className="pt-[13px] mr-[81px]" to="/home">
            Home
          </Link>
          <Link className="pt-[13px]" to="/home">
            List Movie
          </Link>
        </div>
        <div className=" pt-[23px] pr-[50px]">
          <img className="w-[18px]" src={require("../assets/images/search.png")} alt="Search" />
        </div>
        <div className=" items-center pt-[13px]">
          <img className="w-[56px]" src={require("../assets/images/Profile.png")} alt="Profile" />
        </div>
      </nav>
      <div className="flex bg-[#F5F6F8] px-[79px]">
        <div className="pt-[56px]">
          <div className="border-1 bg-white rounded-[24px]">
            <div className="p-[40px]">
              <div className="text-[#4E4B66] text-[16px]">INFO</div>
              <div className="pt-[32px]">
                <img className="mb-[32px]" src={require("../assets/images/Profile.png")} alt="Profile" />
              </div>
              <div className="text-[#14142B] text-[20px] text-center">Jonas El Rodriguez</div>
              <div className="text-[14px] text-[#4E4B66] text-center  tracking-[.75px] leading-[24px]">Moviegoers</div>
            </div>
            <hr className="mb-[20px]" />
            <div className="flex justify-center pb-[25px]">
              <button className="border-1 bg-[#5F2EEA] rounded-[16px] text-white  px-[70px] py-[8px] text-[16px]">Logout</button>
            </div>
          </div>
        </div>
        <div className="pl-[32px]">
          <div className="pt-[56px]">
            <div className="border-1 bg-white rounded-[16px] w-[900px]">
              <div className="py-[25px] flex">
                <Link className="text-[18px] tracking-[.75] leading-[34px] text-[#AAAAAA] mr-[56px] pl-[48px]">Account Settings</Link>
                <Link className="text-[18px] tracking-[.75] leading-[34px] text-[#14142B]">Order History</Link>
              </div>
              <div className="pl-[240px]">
                <hr className=" w-[105px] pl-[25px] border-2 border-[#5F2EEA] rounded-[4px]" />
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
      <footer className="flex px-[136px]">
        <div className="pt-[110px] flex-1">
          <img src={require("../assets/images/logoreal.png")} alt="logo footer" />
          <div className="pt-[30px] text-[16px] text-[#6E7191] mb-[5px]">Stop waiting in line. Buy tickets</div>
          <div className="text-[16px] text-[#6E7191]">conveniently, watch movies quietly.</div>
        </div>
        <div className="pt-[110px] pl-[80px] flex-1">
          <div className="text-[16px] mb-[30px] font-bold">Explore</div>
          <div className="mb-2">Home</div>
          <div>List Movie</div>
        </div>
        <div className="pt-[110px] text-[16px] mb-[30px] font-bold flex-1">
          <div className="mb-[30px]">Our Sponsor</div>
          <img className="mb-[30px]" src={require("../assets/images/pic1.png")} alt="ebu" />
          <img className="mb-[30px]" src={require("../assets/images/pic2.png")} alt="cineone" />
          <img className="mb-[30px]" src={require("../assets/images/pic3.png")} alt="hiflix" />
        </div>
        <div className="pt-[110px] flex-1">
          <div className="mb-[35px] font-bold">Follow us</div>
          <div className="flex flex-row mb-[28px]">
            <img className="mr-[22px]" src={require("../assets/images/facebook.png")} alt="facebook" />
            <div>Tickitz Cinema id</div>
          </div>
          <div className="flex flex-row mb-[28px]">
            <img className="mr-[15px]" src={require("../assets/images/instagram.png")} alt="instagram" />
            <div>tickitz.id</div>
          </div>
          <div className="flex flex-row mb-[28px]">
            <img className="mr-[22px]" src={require("../assets/images/twitter.png")} alt="twitter" />
            <div>tickitz.id</div>
          </div>
          <div className="flex flex-row">
            <img className="mr-[20px]" src={require("../assets/images/youtube.png")} alt="youtube" />
            <div>Tickitz Cinema id</div>
          </div>
        </div>
      </footer>
      <div className="text-center text-[#4E4B66] text-[14px] pt-[70px] tracking-[.5px] leading-[18px] mb-[48px]">© 2020 Tickitz. All Rights Reserved.</div>
    </div>
  );
};

export default OrderHistory;
