import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="md:flex px-3 md:px-[136px]">
      <div className="pt-5 md:pt-[110px] flex-1 ">
        <div className=" relative">
          <span className="text-[60px] text-[#ef91a1] font-Rubik">Cluezzy</span>
        </div>
        <div className=" md:pt-[30px] text-[16px] text-[#6E7191] mb-[5px]">Stop waiting in line. Buy tickets</div>
        <div className="text-[16px] text-[#6E7191]">conveniently, watch movies quietly.</div>
      </div>
      <div className="pt-5 md:pt-[110px] md:pl-[80px] flex-1 flex flex-col">
        <div className="text-[16px] mb-5 md:mb-[30px] font-bold">Explore</div>
        <Link to="/homepage" className="mb-5">
          Home
        </Link>
        <Link to="/all">List Movie</Link>
      </div>
      <div className="pt-5 md:pt-[110px] text-[16px] mb-[30px] font-bold flex-1">
        <div className="mb-[30px]">Our Sponsor</div>
        <img className="mb-[30px]" src={require("../assets/images/pic1.png")} alt="ebu" />
        <img className="mb-[30px]" src={require("../assets/images/pic2.png")} alt="cineone" />
        <img className="mb-[30px]" src={require("../assets/images/pic3.png")} alt="hiflix" />
      </div>
      <div className="pt-5 md:pt-[110px] flex-1">
        <div className="mb-[35px] font-bold">Follow us</div>
        <div className="flex flex-row mb-[28px]">
          <img className="mr-[22px]" src={require("../assets/images/facebook.png")} alt="facebook" />
          <div>Cluezzy Cinema id</div>
        </div>
        <div className="flex flex-row mb-[28px]">
          <img className="mr-[15px]" src={require("../assets/images/instagram.png")} alt="instagram" />
          <div>Cluezzy.id</div>
        </div>
        <div className="flex flex-row mb-[28px]">
          <img className="mr-[22px]" src={require("../assets/images/twitter.png")} alt="twitter" />
          <div>Cluezzy.id</div>
        </div>
        <div className="flex flex-row">
          <img className="mr-[20px]" src={require("../assets/images/youtube.png")} alt="youtube" />
          <div>Cluezzy Cinema id</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
