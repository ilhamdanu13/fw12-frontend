import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [movieDetail, setMovieDetail] = React.useState({});
  React.useEffect(() => {
    getMovieDetail().then((data) => {
      setMovieDetail(data);
    });
  }, []);

  const getMovieDetail = async () => {
    const { data } = await axios.get("https://fw12-backend-shr6.vercel.app/movies/1");
    return data;
  };

  return (
    <div>
      <nav className="flex flex-1 pt-[36px] px-[79px]">
        <div>
          <img className="mr-[81px]" src={require("../assets/images/navlogo.png")} alt="navlogo" />
        </div>
        <div className="flex-1 items-center content-center pt-[13px]">
          <Link className="pt-[13px] mr-[50px]" to="/home">
            Dashboard
          </Link>
          <Link className="pt-[13px]  mr-[50px]" to="/home">
            Manage Movie
          </Link>
          <Link className="pt-[13px]" to="/home">
            Manage Schedule
          </Link>
        </div>
        <div className=" pt-[23px] pr-[50px]">
          <img className="w-[18px]" src={require("../assets/images/search.png")} alt="Search" />
        </div>
        <div className=" items-center pt-[13px]">
          <img className="w-[56px]" src={require("../assets/images/Profile.png")} alt="Profile" />
        </div>
      </nav>
      <div className="bg-[#E5E5E5]">
        <div className="pt-[56px] pb-[24px] pl-[70px] pr-[200px] flex">
          <div className="text-[24px] font-bold flex-1">Form Movie</div>
          <div className="text-[24px] font-bold">Filtered</div>
        </div>
        <div className=" px-[70px]">
          <div className="flex">
            <div className=" mr-[26px] mb-[73px]">
              <img className="" src={require("../assets/images/dashboard.png")} alt="Dashboard" />
            </div>
            <div className="border-1 bg-white px-[20px] mb-[73px] pb-[38px] rounded-[4px]">
              <div className="pt-[34px] mb-[28px] text-[#4E4B66] text-[16px]">
                <select className=" border-2 w-full pl-[11px] py-[8px] rounded-[4px] bg-[#FCFDFE] bg-[#FCFDFE]">
                  <option value="" className="">
                    Select Movie
                  </option>
                </select>
              </div>
              <div className="mb-[28px] text-[#4E4B66] text-[16px]">
                <select className=" border-2 w-[190px] pl-[11px] py-[8px] rounded-[4px] bg-[#FCFDFE] bg-[#FCFDFE]">
                  <option value="">Select Premiere</option>
                </select>
              </div>
              <div className="mb-[35px] text-[#4E4B66] text-[16px]">
                <select className=" border-2 w-full pl-[11px] py-[8px] rounded-[4px] bg-[#FCFDFE] bg-[#FCFDFE]">
                  <option value="">Select Location</option>
                </select>
              </div>
              <div className="mb-[20px]">
                <button className="border-2 border-[#5F2EEA] text-[#5F2EEA] w-full py-[8px] rounded-[4px]">Filter</button>
              </div>
              <div>
                <button className="border-2 border-[#5F2EEA] text-[#5F2EEA] w-full py-[8px] rounded-[4px]">Reset</button>
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

export default Dashboard;
