import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarUser from "../components/NavbarUser";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import http from "../helpers/http";
import { logout as logoutAction } from "../redux/reducers/auth";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const OrderHistory = () => {
  const token = useSelector((state) => state?.auth?.token);
  const decode = jwtDecode(token);
  const { id } = decode;
  const [bio, setBio] = React.useState({});
  const movieName = useSelector((state) => state.transaction.movieName);
  const bookingDate = useSelector((state) => state.transaction.bookingDate);
  const bookingTime = useSelector((state) => state.transaction.bookingTime);
  const cinemaPicture = useSelector((state) => state.transaction.cinemaPicture);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let duration = bookingTime;
  let hour = String(duration).split(":").slice(0, 1).join(":");
  let minute = String(duration).split(":")[1];

  let NewDate = new Date(bookingDate).toDateString();
  let month = NewDate.split(" ")[1];
  let dates = NewDate.split(" ")[2];
  let year = NewDate.split(" ")[3];

  React.useEffect(() => {
    getBio().then((data) => {
      setBio(data?.results);
    });
  }, [id]);

  const getBio = async () => {
    const { data } = await http(token).get("/profile/" + id);
    return data;
  };

  const handlerLogout = () => {
    setTimeout(() => {
      dispatch(logoutAction());
      navigate("/signin");
    }, 2000);
  };

  return (
    <div>
      <NavbarUser />
      <div className="md:flex bg-[#F5F6F8] px-3 md:px-[79px]">
        <div className="py-5 md:py-[56px]">
          <div className="border-1 bg-white rounded-[24px]">
            <div className="md:p-[40px] mb-3 md:mb-0">
              <div className="pl-[40px] md:pl-0 pt-[40px] md:pt-0 text-[#4E4B66] text-[16px]">INFO</div>
              <div className="pt-[32px] flex justify-center items-center">
                {bio?.picture ? (
                  <img className="w-[136px] h-[136px] rounded-[50%] mb-3 shadow-lg" src={"https://res.cloudinary.com/fw12/image/upload/v1674621799/" + bio.picture} alt="Profile" />
                ) : (
                  <img className="w-[136px] h-[136px] rounded-[50%] mb-3 shadow-lg" src={"https://res.cloudinary.com/fw12/image/upload/v1674616077/Cluezzy/User_phom73.png"} alt="Profile" />
                )}
              </div>
              <div className="text-[#14142B] text-[20px] text-center">{bio.firstName + " " + bio.lastName}</div>
              <div className="text-[14px] text-[#4E4B66] text-center  tracking-[.75px] leading-[24px]">Moviegoers</div>
            </div>
            <hr className="mb-[20px]" />
            <div className="flex justify-center pb-[25px]">
              <button onClick={handlerLogout} className="border-1 bg-[#f1554c] rounded-[16px] text-white  px-[70px] py-[8px] text-[16px]">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="pl-3 md:pl-[32px]">
          <div className="md:pt-[56px]">
            <div className="border-1 bg-white rounded-[16px] md:w-[900px]">
              <div className="py-[25px] flex">
                <Link to="/profile" className="text-[18px] tracking-[.75] leading-[34px] text-[#AAAAAA] mr-[56px] pl-[48px]">
                  Account Settings
                </Link>
                <Link className="text-[18px] tracking-[.75] leading-[34px] text-[#14142B]">Order History</Link>
              </div>
              <div className="pl-[205px] md:pl-[240px]">
                <hr className="w-[50px] md:w-[105px] pl-[25px] border-2 border-[#f1554c] rounded-[4px]" />
              </div>
            </div>
          </div>
          <div className="pt-5 md:pt-[56px] pb-5 md:pb-0">
            <div className="border-1 bg-white rounded-[16px] md:w-[900px] mb-[24px]">
              <div className="pl-[32px] pr-[67px] pt-[40px] mb-[49px] md:flex ">
                <div className="flex-1">
                  <div className=" text-[#AAAAAA] text-[14px]">
                    {month} {dates}, {year} - {hour} {minute}
                  </div>
                  <div className="text-[24px] font-semibold">{movieName}</div>
                </div>
                <div className="pt-[15px]">
                  <img className="" src={cinemaPicture} alt="cinema" />
                </div>
              </div>

              <hr className="mb-[32px]" />
              <div className="md:flex pl-3 md:pl-[32px] pr-3 md:pr-[67px] pb-[32px]">
                <div className="border-1 bg-[#00BA88] py-[10px] px-[78px] md:px-[50px] rounded-[4px] text-white md:mr-[500px] mb-3 md:mb-0">Ticket in active</div>
                <Link to="/ticket result" className="text-[#AAAAAA] text-[18px] pt-[8px] flex justify-center items-center md:block">
                  See Details
                </Link>
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

export default OrderHistory;
