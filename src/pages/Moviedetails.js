import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Navigate } from "react-router-dom";
import http from "../helpers/http";
import { useDispatch, useSelector } from "react-redux";
import { chooseMovie as chooseMovieAction } from "../redux/reducers/transaction";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import jwtDecode from "jwt-decode";

const Moviedetails = () => {
  const token = useSelector((state) => state?.auth?.token);
  const decode = jwtDecode(token);
  const userId = decode.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = React.useState({});
  const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [cityList, setCityList] = React.useState([]);
  const [city, setCity] = React.useState({});
  const [schedule, setSchedule] = React.useState({});
  const [selectedPrice, setSelectedPrice] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState("");
  const [selectedCinema, setSelectedCinema] = React.useState(null);
  const [selectedCinemaId, setSelectedCinemaId] = React.useState(null);
  const [selectedMovie, setSelectedMovie] = React.useState("");

  React.useEffect(() => {
    getMovieDetail();
    getCinemas();
    getSchedule();
  }, []);

  React.useEffect(() => {
    getSchedule();
  }, []);

  const getMovieDetail = async () => {
    const { data } = await axios.get("http://localhost:8888/movies/" + id);
    setMovieDetail(data.results);
    // console.log(data);
  };

  const getCinemas = async () => {
    const { data } = await axios.get("http://localhost:8888/cinemas");
    setCityList(data.results);
    // console.log(data);
    if (data.results.length) {
      setCity(data.results[0].name);
    }
  };

  const getSchedule = async () => {
    const { data } = await axios.get(`http://localhost:8888/movieSchedules/${id}`);
    setSchedule(data.results);
  };

  const selectTime = (time, cinema, price, title) => {
    setSelectedTime(time);
    setSelectedCinema(cinema);
    setSelectedPrice(price);
    setSelectedMovie(title);
  };

  // const selectTitle = (movieTitle) => {
  //   setSelectedMovie(movieTitle)
  // }

  const book = () => {
    dispatch(
      chooseMovieAction({
        userId: userId,
        movieId: id,
        cinemaId: selectedCinema,
        bookingDate: date,
        bookingTime: selectedTime,
        price: selectedPrice,
        movieName: selectedMovie,
      })
    );
    navigate("/orderpage");
  };

  console.log(schedule);

  return (
    <div>
      {token ? <NavbarUser /> : <Navbar />}
      <div className="px-[79px] flex mb-[80px] pt-[40px]">
        <div className="border-box border-2 p-[32px] rounded-[8px] mr-[28px]">
          <img className="w-[236px] h-[362px]" src={movieDetail.picture} alt={movieDetail.title} />
          {/* <img className="w-[236px] h-[362px]" src={require("../assets/images/spidey.png")} alt="Spiderman" /> */}
        </div>
        <div className="w-[850px]">
          <div className="mb-[32px]">
            <div className="text-[#14142B] text-[32px] font-bold">{movieDetail.title}</div>
            <div className="text-[#4E4B66] text-[18px]">{movieDetail.genre}</div>
          </div>
          <div className="text-[#8692A6] text-[14px] flex ">
            <div className="mr-[128px]">Release date</div>
            <div>Directed by</div>
          </div>
          <div className="flex mb-[16px] text-[#121212] text-[16px]">
            <div className="mr-[110px]">{movieDetail.releaseDate}</div>
            <div>{movieDetail.director}</div>
          </div>
          <div className="flex text-[#8692A6] text-[14px]">
            <div className="mr-[153px]">Duration</div>
            <div>Casts</div>
          </div>
          <div className="flex mb-[24px] text-[#121212] text-[16px]">
            <div className="mr-[150px]">{movieDetail.duration}</div>
            <div>{movieDetail.casts}, ...</div>
          </div>
          <hr className="mb-[16px]" />
          <div>
            <div className="text-[20px] font-semibold mb-[4px]">Synopsis</div>
            <div className="text-[16px] tracking-[.75px] leading-[32px]">{movieDetail.synopsis}</div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F8] py-[78px]">
        <div className="text-center justify-center">
          <div className="text-[24px] font-bold mb-[24px]">Showtimes and Tickets</div>

          <div className="flex justify-center">
            <div className="text-[#4E4B66]">
              <input className="border-2 mr-[24px] py-[4px] pl-[5px] pr-[100px] rounded-[4px]" type="date" defaultValue={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="text-[#4E4B66] ">
              <select onChange={(e) => setCity(e.target.value)} className="border-2 py-[5px] pl-[5px] pr-[100px] rounded-[4px]">
                {cityList.map((o) => (
                  <option>{o.city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className=" px-[79px] pt-[72px] mb-[66px] flex">
          <div className="flex">
            <div className="border-2 rounded-[8px] py-[24px] bg-white mr-[32px]">
              <div className="flex pl-[41px] pr-[24px]">
                <div className="pt-[15px]">
                  <img className="" src={schedule.cinemapicture} alt={schedule.cinema} />
                </div>
                <div className="pl-[46px]">
                  <div className="text-[24px] font-semibold leading-8 tracking-[.75px]">{schedule.cinema}</div>
                  <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">{schedule.address}</div>
                  <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">{schedule.city}</div>
                </div>
              </div>
              <hr className="mt-[24px] mb-[16px]" />
              {token ? (
                <div className="w-[381px] pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold flex-wrap">
                    {schedule?.times?.map((time) => (
                      <button className={` mb-[16px] ${schedule.cinema === selectedCinema && time === selectedTime && "text-violet-700 font-bold"}`} onClick={() => selectTime(time, schedule.cinema, schedule.price, schedule.title)}>
                        <span className="mr-[40px]">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    {schedule?.times?.map((time) => (
                      <button className={`mr-[32px] ${schedule.cinema === selectedCinema && time === selectedTime && "text-violet-700 font-bold"}`} onClick={() => window.alert("Please login")}>
                        <span className="mr-5">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex pl-[32px] pr-[24px] text-[16px] mb-[32px]">
                <div className="flex-1 text-[#6B6B6B] ">Price</div>
                <div className="font-semibold">IDR.{schedule.price}/seat</div>
              </div>
              <div className="flex justify-center text-center">
                <button disabled={selectedCinema !== schedule.cinema} onClick={book} className="rounded-[8px] pl-[112px] pr-[112px] py-[4px] bg-[#f1554c] text-white font-bold">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-[70px] justify-center items-center">
          <hr className="w-[523px] " />
          <div className="text-[#f1554c] text-[16px] px-[23px]">view more</div>
          <hr className="w-[523px]" />
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Moviedetails;
