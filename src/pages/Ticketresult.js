import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TicketResult = () => {
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
      <div className="flex bg-[#F5F6F8] px-[79px] justify-center">
        <div className="pt-[72px] pb-[96px] px-[195px]">
          <div className="bg-white">
            <div className="mb-[48px] pt-[56px] px-[300px]">
              <div className="text-[24px] font-bold">Proof of Payment</div>
            </div>
            <div className="flex">
              <div className="flex pl-[72px] pb-[144px]">
                <div className="border-l-2 border-b-2 rounded-tl-xl rounded-bl-xl">
                  <div className="border-r-2  border-dashed  border-r-[#DEDEDE] bg-[#5F2EEA]  rounded-tl-xl">
                    <div className="pl-[56px] pt-[23px] flex items-center">
                      <div className="flex-1 mb-[23px]">
                        <img className="w-[115px]" src={require("../assets/images/logoatas.png")} alt="logoatas" />
                      </div>
                      <div className="text-white pl-[120px] pr-[30px] ">
                        <div className="pb-[20px]">Admit One</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[32px] pl-[56px] pr-[56px] border-r-2  border-dashed  border-r-[#DEDEDE] pb-[43px]">
                    <div className="mb-[26px]">
                      <div className="text-[12px] text-[#AAAAAA] mb-[10px]">Movie</div>
                      <div className="text-[16px] font-semibold text-[#14142B] mb-[10px]">Spider-Man: Homecoming</div>
                    </div>
                    <div className="mb-[26px]">
                      <div className="flex text-[#AAAAAA] text-[12px]">
                        <div className="flex-1">Date</div>
                        <div className="flex-1">Time</div>
                        <div>Category</div>
                      </div>
                      <div className="flex text-[#14142B] text-[16px]">
                        <div className="flex-1">07 July</div>
                        <div className="flex-1">02:00pm</div>
                        <div>Action</div>
                      </div>
                    </div>
                    <div className="mb-[26px]">
                      <div className="flex text-[#AAAAAA] text-[12px]">
                        <div className="flex-1">Count</div>
                        <div className="flex-1">Seats</div>
                        <div>Price</div>
                      </div>
                      <div className="flex text-[#14142B] text-[16px] items-center">
                        <div className="flex-1">3 pieces</div>
                        <div className="flex-1">C4, C5, C6</div>
                        <div className="font-bold text-[24px]">$30.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-r-2 border-b-2 rounded-tr-xl rounded-br-xl">
                  <div className=" bg-[#5F2EEA]  h-max rounded-tr-xl px-[70px]">
                    <div className="flex justify-center ">
                      <div className="pt-[25px] mb-[21px]">
                        <img className="w-[115px]" src={require("../assets/images/logoatas.png")} alt="logoatas" />
                      </div>
                    </div>
                  </div>
                  <div className=" justify-center flex pt-[50px]">
                    <img className="" src={require("../assets/images/QR Code.png")} alt="QR Code" />
                  </div>
                </div>
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

export default TicketResult;
