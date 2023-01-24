import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import Month from "../components/Month";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

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
        <Search />
        <Month />
        <div className="flex flex-wrap bg-white pl-[55px] py-[45px] rounded-[8px] mb-[32px]">
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
        <Pagination />
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default Viewall;
