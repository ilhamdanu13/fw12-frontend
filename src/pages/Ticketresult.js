import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import NavbarUser from "../components/NavbarUser";

const TicketResult = () => {
  const [movieDetail, setMovieDetail] = React.useState({});
  const movieName = useSelector((state) => state.transaction.movieName);
  const totalPrice = useSelector((state) => state.transaction.totalPrice);
  const bookingDate = useSelector((state) => state.transaction.bookingDate);
  const bookingTime = useSelector((state) => state.transaction.bookingTime);
  const seatNum = useSelector((state) => state.transaction.seatNum);
  const genre = useSelector((state) => state.transaction.genre);

  let duration = bookingTime;
  let hour = String(duration).split(":").slice(0, 1).join(":");
  let minute = String(duration).split(":")[1];

  let NewDate = new Date(bookingDate).toDateString();
  let month = NewDate.split(" ")[1];
  let dates = NewDate.split(" ")[2];
  let year = NewDate.split(" ")[3];

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
      <NavbarUser />
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
                      <div className="text-[16px] font-semibold text-[#14142B] mb-[10px] font-Mulish">{movieName}</div>
                    </div>
                    <div className="mb-[26px]">
                      <div className="flex text-[#AAAAAA] text-[12px]">
                        <div className="flex-1">Date</div>
                        <div className="flex-1">Time</div>
                        <div>Category</div>
                      </div>
                      <div className="flex text-[#14142B] text-[16px]">
                        <div className="flex-1 font-Mulish font-semibold">
                          {dates} {month}
                        </div>
                        <div className="flex-1 font-Mulish font-semibold">
                          {hour}:{minute}
                        </div>
                        <div className="font-Mulish font-semibold w-[50px]">{genre}</div>
                      </div>
                    </div>
                    <div className="mb-[26px]">
                      <div className="flex text-[#AAAAAA] text-[12px]">
                        <div className="flex-1">Count</div>
                        <div className="flex-1">Seats</div>
                        <div>Price</div>
                      </div>
                      <div className="flex text-[#14142B] text-[16px] items-center">
                        <div className="flex-1 font-Mulish font-semibold">3 pieces</div>
                        <div className="flex-1 font-Mulish font-semibold">{seatNum}</div>
                        <div className="font-bold text-[16px] font-Mulish font-semibold">IDR{totalPrice}</div>
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
      <Footer />
      <Copyright />
    </div>
  );
};

export default TicketResult;
