import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { chooseSeat as chooseSeatAction } from "../redux/reducers/transaction";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const OrderPage = () => {
  // const [movieDetail, setMovieDetail] = React.useState({});
  // React.useEffect(() => {
  //   getMovieDetail().then((data) => {
  //     setMovieDetail(data);
  //   });
  // }, []);

  // const getMovieDetail = async () => {
  //   const { data } = await axios.get("http://localhost:8888/movies/1");
  //   return data;
  // };

  // const dispatch = useDispatch();
  // const transactionData = useSelector((state) => state.transaction);

  // const dispatchTrx = () => {
  //   const data = {
  //     paymentMethodId: 1,
  //     fullName: "admin",
  //     email: "admin@mmail.com",
  //     phoneNumber: "0812242522",
  //   };
  //   dispatch(transactionAction({ transactionData: { ...transactionData, ...data } }));
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = React.useState([]);

  const selectSeat = (seat) => {
    if (selectedSeat.includes(seat)) {
      setSelectedSeat([...selectedSeat.filter((existing) => existing !== seat)]);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
    }
  };

  const checkout = () => {
    dispatch(chooseSeatAction({ seatNumber: selectedSeat.join(", ") }));
    navigate("/paymentpage");
  };

  return (
    <div>
      <NavbarUser />
      <div className="flex bg-[#F5F6F8] ">
        <div className="py-[78px] pl-[70px] pr-[24px] w-[850px]">
          <div className="mb-[24px]">
            <div className="text-[24px] font-bold">Movie Selected</div>
          </div>
          <div className="border-1 bg-white rounded-[8px]">
            <div className="flex py-[37px] px-[48px]">
              <div className="text-[24px] font-semibold tracking-[.25px] leading-[30px] flex-1">Spider-Man: Homecoming</div>
              <button className="border-1 rounded-[8px] text-[14px] bg-[#F5F6F8] text-[#f1554c] font-bold py-[5px] px-[10px]">Change movie</button>
            </div>
          </div>
          <div>
            <div className="pt-[48px] mb-[24px]">
              <div className="text-[24px] font-bold">Choose Your Seat</div>
            </div>
            <div className="border-1 bg-white rounded-[8px]">
              <div className="text-center pt-[106px] pl-[122px] pr-[100px] mb-[24px]">
                <div className="text-[14px] font-semibold mb-[8px]">Screen</div>
                <hr className="border-2 rounded-[4px]" />
              </div>
              <div className="grid grid-cols-2 gap-11 ml-[50px]">
                <div className="grid grid-rows-8 gap-1 font-Mulish font-semibold">
                  {["A", "B", "C", "D", "E", "F", "G", ""].map((alphabet, _i) => {
                    return (
                      <div className="grid grid-cols-8">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((index, _i) => {
                          if (index > 0) {
                            if (alphabet !== "") {
                              const seatNumber = alphabet + String(index);
                              return <button onClick={() => selectSeat(seatNumber)} className={`w-5 h-5 bg-[#D6D8E7] hover:bg-[#5F2EEA] rounded ${selectedSeat.includes(seatNumber) ? "bg-violet-700" : ""}`} />;
                            } else {
                              return <button className="w-5 h-5 ">{index}</button>;
                            }
                          } else {
                            return <button className="w-5 h-5 ">{alphabet}</button>;
                          }
                        })}
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-rows-8 gap-1 font-Mulish font-semibold">
                  {["A", "B", "C", "D", "E", "F", "G", ""].map((alphabet, _i) => {
                    return (
                      <div className="grid grid-cols-8">
                        {[8, 9, 10, 11, 12, 13, 14].map((index, _i) => {
                          if (index > 0) {
                            if (alphabet !== "") {
                              const seatNumber = alphabet + String(index);
                              return <button onClick={() => selectSeat(seatNumber)} className={`w-5 h-5 bg-[#D6D8E7] hover:bg-[#5F2EEA] rounded ${selectedSeat.includes(seatNumber) ? "bg-violet-700" : ""}`} />;
                            } else {
                              return <button className="w-5 h-5 ">{index}</button>;
                            }
                          } else {
                            return <button className="w-5 h-5 ">{alphabet}</button>;
                          }
                        })}
                      </div>
                    );
                  })}
                </div>
                <div></div>
              </div>

              <div className="pl-[87px] pb-[106px]">
                <div className="mb-[41px]">
                  <div>Seating key</div>
                </div>
                <div className="flex">
                  <div className="flex mr-[40px]">
                    <div className="border-[13px] rounded-[4px] border-[#D6D8E7] mr-[16px]"></div>
                    <div>Available</div>
                  </div>
                  <div className="flex mr-[40px]">
                    <div className="border-[13px] rounded-[4px] border-[#f1554c] mr-[16px]"></div>
                    <div>Selected</div>
                  </div>
                  <div className="flex mr-[40px] ">
                    <div className="border-[13px] rounded-[4px] border-[#0b2361] mr-[16px]"></div>
                    <div className="">Sold</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[40px]">
              <div className="flex-1">
                <button type="submit" className="border-2 border-[#f1554c] text-[#f1554c] px-[75px] py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Change your movie
                </button>
              </div>
              <div>
                <button onClick={checkout} className="border-2 border-[#f1554c] text-[#f1554c] px-[75px] py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Checkout now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[85px] w-[410px]">
          <div>
            <div className="text-[24px] font-bold leading-[30px] tracking-[.25px] mb-[24px]">Order Info</div>
          </div>
          <div className="border-1 bg-white rounded-[8px]">
            <div className="text-center pt-[32px] px-[77px]">
              <div className="mb-[13px] pl-[70px]">
                <img className="" src={require("../assets/images/cineone.png")} alt="Cineone" />
              </div>
              <div className="mb-[24px]">
                <div className="font-semibold text-[24px]">CineOne21 Cinema</div>
              </div>
            </div>
            <div className="flex px-[24px] mb-[16px]">
              <div className="flex-1 text-[#6B6B6B] text-[14px]">Movie selected</div>
              <div className="text-[#14142B] text-[14px]">Spider-Man: Homecoming</div>
            </div>
            <div className="flex px-[24px] mb-[16px]">
              <div className="flex-1 text-[#6B6B6B] text-[14px]">Tuesday, 07 July 2020</div>
              <div className="text-[#14142B] text-[14px]">02:00</div>
            </div>
            <div className="flex px-[24px] mb-[16px]">
              <div className="flex-1 text-[#6B6B6B] text-[14px]">One ticket price</div>
              <div className="text-[#14142B] text-[14px]">$10</div>
            </div>
            <div className="flex px-[24px] mb-[40px]">
              <div className="flex-1 text-[#6B6B6B] text-[14px]">Seat choosed</div>
              <div className="text-[#14142B] text-[14px]">C4, C5, C6</div>
            </div>
            <hr className="mb-[24px] " />
            <div className="flex px-[24px] mb-[24px]">
              <div className="flex-1 font-semibold text-[18px] pt-[5px]">Total Payment</div>
              <div className="text-[#5F2EEA] text-[24px] mb-[24px]">$30</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default OrderPage;
