import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import Month from "../components/Month";

const Viewall = () => {
  const [allMovie, setAllMovie] = React.useState({});
  React.useEffect(() => {
    getAllMovie().then((data) => {
      setAllMovie(data);
    });
  }, []);

  const getAllMovie = async () => {
    const { data } = await axios.get("http://localhost:8888/movies");
    return data;
  };

  return (
    <div>
      <NavbarUser />
      <div className="px-[136px] bg-[#F5F6F8] pb-[32px]">
        <div className="flex mb-[40px] pt-[57px]">
          <div className="flex-1 text-[24px] font-bold ">List Movie</div>
          <div className="flex pr-[25px] pl-[10px] py-[5px] border-2 box-border rounded-[12px] mr-[20px]content-center mr-[12px] bg-white">
            <span className="mr-[10px]">Sort</span>
            <div className="pt-[7px] pl-[10px] ml-[12px]">
              <img className="w-[15px] h-[10px]" src={require("../assets/images/down.png")} alt="Search" />
            </div>
          </div>
          <div>
            <input className="form-input pl-5 py-[5px] border-2 box-border rounded-[12px]" type="text" placeholder="Search Movie Name..." />
          </div>
        </div>
        <Month />
        <div className="flex flex-wrap bg-white pl-[55px] py-[45px] rounded-[8px]">
          {allMovie?.results?.map((char) => (
            <div className="pt-[56px] ">
              <div className="flex flex-col border-box h-[452px] border-2 p-[32px] rounded-[8px] border-[#e9ecf4] mr-[28px] text-center mb-[20px]">
                <div className="">
                  <img className="w-[159px] h-[200px] rounded-[4px]" src={char.picture} alt={char.title} />
                </div>
                <div className="flex-1 pt-[24px]">
                  <div className="text-[18px] font-bold w-[150px]">{char.title}</div>
                </div>
                <div className="flex-1">
                  <div className="text-[12px] text-[#A0A3BD] mb-[40px]">{char.genre}</div>
                </div>
                <div className="">
                  <button className=" border-2 px-[45px] py-[5px] rounded-[4px] text-[#f1554c] text-[14px] border-[#f1554c] hover:text-white hover:bg-[#f1554c] hover:font-semibold hover:shadow-xl duration-300">
                    <Link to={"/moviedetails/" + char.id}>Details</Link>
                  </button>
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

export default Viewall;
