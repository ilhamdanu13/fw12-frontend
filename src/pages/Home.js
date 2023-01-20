import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [nowShowing, setNowShowing] = React.useState({});
  const [upcoming, setUpcoming] = React.useState({});
  React.useEffect(() => {
    getNowShowing().then((data) => {
      setNowShowing(data);
    });
    getUpcoming().then((data) => {
      setUpcoming(data);
    });
  }, []);

  const getNowShowing = async () => {
    const { data } = await axios.get("http://localhost:8888/movies/now");
    return data;
  };

  const getUpcoming = async () => {
    const { data } = await axios.get("http://localhost:8888/movies/upcoming");
    return data;
  };

  return (
    <div>
      <nav className="flex flex-1 pt-[36px] mb-[48px] px-[136px]">
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
        <div className=" items-center pt-[13px]">
          <Link to="/signup" className="rounded-[4px] border-2 bg-[#5F2EEA] px-[25px] py-[7px] text-white text-sm">
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="flex items-center px-[136px]">
        <div className="flex-1">
          <div className="text-[#A0A3BD] text-[24px]">Nearest Cinema, Newest Movie, </div>
          <div className="text-[#5F2EEA] font-bold text-[56px]">Find out now!</div>
        </div>
        <div>
          <img src={require("../assets/images/Group 14.png")} alt="threemovies" />
        </div>
      </div>
      <div className="bg-[#F5F6F8] px-[136px] mb-[104px] pb-[80px]">
        <div className="flex pt-[64px]">
          <div className="flex-1">
            <div className="text-[24px] text-[#5F2EEA] font-bold mb-[10px]">Now Showing</div>
            <div className="content-none h-[2.5px] w-[100px] bg-[#5f2eea] ml-[25px]"></div>
          </div>
          <div className="text-[16px] text-[#5F2EEA] font-bold">view all</div>
        </div>
        <div className="flex overflow-auto flex-nowrap">
          {nowShowing?.map((char) => (
            <div className="pt-[56px]">
              <div className="border-box border-2 p-[32px] rounded-[8px] border-white mr-[28px] text-center">
                <div>
                  <img className="w-[159px] h-[200px] rounded-[4px]" src={char.picture} alt={char.title} />
                </div>
                <div className="pt-[24px]">
                  <div className="text-[18px] font-bold">{char.title}</div>
                  <div className="text-[12px] text-[#A0A3BD] mb-[40px]">{char.genre}</div>
                  <button className="border-2 px-[45px] py-[5px] rounded-[4px] text-[#5F2EEA] text-[14px] border-[#5F2EEA]">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[136px]">
        <div className="flex mb-[40px]">
          <div className="flex-1 text-[24px] font-bold ">Upcoming Movie</div>
          <div className="text-[16px] text-[#5F2EEA] font-bold">view all</div>
        </div>
        <div className="flex overflow-auto mb-[68px]">
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>September</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>Oktober</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>November</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>Desember</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>January</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>February</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>March</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>April</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>May</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>June</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[16px]">
            <div>July</div>
          </div>
          <div className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#5F2EEA]">
            <div>August</div>
          </div>
        </div>
        <div className="flex overflow-auto flex-nowrap">
          {upcoming?.results?.map((char) => (
            <div className="">
              <div className="border-box border-2 p-[32px] rounded-[8px] text-center mr-[24px]">
                <div className=" overflow-auto">
                  <img className="w-[159px] h-[200px] rounded-[4px]" src={char.picture} alt={char.picture} />
                </div>
                <div className="pt-[24px]">
                  <div className="text-[18px] font-bold">{char.title}</div>
                  <div className="text-[12px] text-[#A0A3BD] mb-[40px]">{char.director}</div>
                  <button className="border-2 px-[45px] py-[5px] rounded-[4px] text-[#5F2EEA] text-[14px] border-[#5F2EEA]">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[136px] pt-[138px] mb-[96px]">
        <div className="shadow-xl pb-[48px]">
          <div className="flex flex-col text-center pt-[48px] mb-[48px]">
            <div className="text-[24px] text-[#4E4B66]">Be the vanguard of the</div>
            <div className="text-[48px] text-[#5F2EEA]">Moviegoers</div>
          </div>
          <div className="flex flex-row justify-center mb-[48px]">
            <input type="email" placeholder="Type your email" className="pl-[24px] pr-[100px] mr-[16px] border-2 rounded-[4px]" />
            <button className="rounded-[4px] border-2 bg-[#5F2EEA] px-[30px] py-[17px] text-white text-sm">Join now</button>
          </div>
          <div className="flex flex-col text-center">
            <div className="text-[14px] text-[#6E7191] leading-[24px] tracking-[.75px]">By joining you as a Tickitz member,</div>
            <div className="text-[14px] text-[#6E7191]">we will always send you the latest updates via email .</div>
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
      <div className="text-center text-[#4E4B66] text-[14px] pt-[70px] tracking-[.5px] leading-[18px]">© 2020 Tickitz. All Rights Reserved.</div>
    </div>
  );
};

export default Home;
