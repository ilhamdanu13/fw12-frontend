import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { useSelector } from "react-redux";
import NavbarUser from "../components/NavbarUser";

const Index = () => {
  const token = useSelector((state) => state?.auth?.token);
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
    const { data } = await axios.get("https://fw12-backend-red.vercel.app/movies/now");
    return data;
  };

  const getUpcoming = async () => {
    const { data } = await axios.get("https://fw12-backend-red.vercel.app/movies/upcoming");
    return data;
  };

  return (
    <div>
      {token ? <NavbarUser /> : <Navbar />}
      <div className="flex items-center px-[136px]">
        <div className="flex-1">
          <div className="text-[#A0A3BD] text-[24px]">Nearest Cinema, Newest Movie, </div>
          <div className="text-[#feb05f] font-bold text-[56px]">Find out now!</div>
        </div>
        <div>
          <img src={require("../assets/images/Group 14.png")} alt="threemovies" />
        </div>
      </div>
      <div className="bg-[#e9ecf4] px-[136px] mb-[104px] pb-[80px]">
        <div className="flex pt-[64px]">
          <div className="flex-1">
            <div className="text-[24px] text-[#0b2361] font-bold mb-[10px]">Now Showing</div>
            <div className="content-none h-[2.5px] w-[100px] bg-[#f1554c] ml-[25px]"></div>
          </div>
          <Link to="/all" className="text-[16px] text-[#0b2361] font-bold">
            view all
          </Link>
        </div>
        <div className="flex overflow-auto ">
          {nowShowing?.results?.map((char) => (
            <div className="pt-[56px] ">
              <div className="flex flex-col border-box h-[452px] border-2 p-[32px] rounded-[8px] border-white mr-[28px] text-center mb-[20px]">
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
      <div className="px-[136px]">
        <div className="flex mb-[40px]">
          <div className="flex-1 text-[24px] font-bold text-[#0b2361]">Upcoming Movie</div>
          <Link to="/all" className="text-[16px] text-[#f1554c] font-bold">
            view all
          </Link>
        </div>

        <div className="flex overflow-auto mb-[68px]">
          {["September", "October", "November", "Desember", "January", "February", "March", "April", "May", "June", "July", "August"].map((month) => (
            <button key={month} className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#f1554c] mr-[16px] mb-[20px] border-[#f1554c] hover:text-white hover:bg-[#f1554c] hover:font-semibold hover:shadow-md duration-300">
              {month}
            </button>
          ))}
        </div>
        <div className="flex overflow-x-auto ">
          {upcoming?.results?.map((char) => (
            <div className="pt-[56px] ">
              <div className="flex flex-col border-box h-[452px] border-2 p-[32px] rounded-[8px] border-[#e9ecf4] mr-[28px] text-center mb-[20px]">
                <div className="">
                  <img className="w-[159px] h-[200px] rounded-[4px] " src={char.picture} alt={char.title} />
                </div>
                <div className="flex-1 pt-[24px]">
                  <div className="text-[18px] font-bold w-[150px]">{char.title}</div>
                </div>
                <div className="">
                  <div className="text-[12px] text-[#A0A3BD] mb-[10px]">{char.genre}</div>
                </div>
                <div className="">
                  <div className="text-[12px] font-bold mb-[10px]">{char.director}</div>
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
      <Subscribe />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Index;
