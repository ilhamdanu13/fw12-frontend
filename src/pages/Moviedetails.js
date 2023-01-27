import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import http from "../helpers/http";
import { useDispatch, useSelector } from "react-redux";
import { chooseMovie as chooseMovieAction } from "../redux/reducers/transaction";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
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
  const [selectedCinemaPicture, setSelectedCinemaPicture] = React.useState("");
  const [selectedMovie, setSelectedMovie] = React.useState("");
  const [selectedGenre, setSelectedGenre] = React.useState("");

  let duration = movieDetail?.duration;
  let hour = String(duration).split(":").slice(0, 1).join(":");
  let minute = String(duration).split(":")[1];

  let NewDate = new Date(movieDetail?.releaseDate).toDateString();
  let month = NewDate.split(" ")[1];
  let dates = NewDate.split(" ")[2];
  let year = NewDate.split(" ")[3];

  React.useEffect(() => {
    getMovieDetail();
    getCinemas();
    getSchedule();
  }, []);

  React.useEffect(() => {
    getSchedule();
  }, []);

  const getMovieDetail = async () => {
    const { data } = await http(token).get("https://fw12-backend-red.vercel.app/movies/" + id);
    setMovieDetail(data.results);
    // console.log(data);
  };

  const getCinemas = async () => {
    const { data } = await http(token).get("https://fw12-backend-red.vercel.app/cinemas");
    setCityList(data.results);
    // console.log(data);
    if (data.results.length) {
      setCity(data.results[0].name);
    }
  };

  const getSchedule = async () => {
    const { data } = await http(token).get(`https://fw12-backend-red.vercel.app/movieSchedules/${id}`);
    setSchedule(data.results);
  };

  const selectTime = (time, cinema, price, title, cinemaPicture, genre) => {
    setSelectedTime(time);
    setSelectedCinema(cinema);
    setSelectedPrice(price);
    setSelectedMovie(title);
    setSelectedCinemaPicture(cinemaPicture);
    setSelectedGenre(genre);
  };

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
        cinemaPicture: selectedCinemaPicture,
        genre: selectedGenre,
      })
    );
    navigate("/orderpage");
  };

  console.log(schedule);

  return (
    <div>
      <NavbarUser />
      <div className="px-3 md:px-[79px] md:flex mb-5 md:mb-[80px] pt-[40px]">
        <div className="border-box border-2 p-[32px] rounded-[8px] md:mr-[28px] mb-3 md:mb-0">
          <img className="w-[236px] h-[362px] rounded-[4px]" src={movieDetail.picture} alt={movieDetail.title} />
          {/* <img className="w-[236px] h-[362px]" src={require("../assets/images/spidey.png")} alt="Spiderman" /> */}
        </div>
        <div className="md:w-[850px]">
          <div className="mb-[32px] font-Mulish">
            <div className="text-[#14142B] text-[32px] font-bold">{movieDetail.title}</div>
            <div className="text-[#4E4B66] text-[18px]">{movieDetail.genre}</div>
          </div>
          <div className="text-[#8692A6] text-[14px] flex font-Mulish">
            <div className="mr-[181px]">Release date</div>
            <div className="hidden md:block">Directed by</div>
          </div>
          <div className="flex mb-[16px] text-[#121212] text-[16px]">
            <div className="mr-[177px] text-[#12121] font-Mulish">
              {month} {dates}, {year}
            </div>
            <div className="text-[#12121] font-Mulish hidden md:block">{movieDetail.director}</div>
          </div>
          <div className="flex text-[#8692A6] text-[14px] font-Mulish">
            <div className="mr-[210px]">Duration</div>
            <div className="hidden md:block">Casts</div>
          </div>
          <div className="flex mb-[24px] text-[#121212] text-[16px]">
            <div className="mr-[117px] text-[#12121] font-Mulish">
              {hour} hours {minute} minutes
            </div>
            <div className="text-[#12121] font-Mulish hidden md:block">{movieDetail.casts}, ...</div>
          </div>
          <div className="block md:hidden mb-3">
            <div className="text-[#8692A6] text-[14px] font-Mulish">Directed by</div>
            <div className="text-[#12121] font-Mulish">{movieDetail.director}</div>
          </div>
          <div className="block md:hidden mb-3 w-[250px]">
            <div className="text-[#8692A6] text-[14px] font-Mulish">Casts</div>
            <div className="text-[#12121] font-Mulish">{movieDetail.casts}, ...</div>
          </div>
          <hr className="mb-[16px]" />
          <div className="w-[280px] md:w-auto">
            <div className="text-[20px] font-semibold mb-[4px] font-Mulish">Synopsis</div>
            <div className="text-[16px] tracking-[.75px] leading-[32px] text-[#12121] font-Mulish text-[#4E4B66]">{movieDetail.synopsis}</div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F8] py-5 md:py-[78px]">
        <div className="text-center justify-center">
          <div className="text-[24px] font-bold mb-[24px]">Showtimes and Tickets</div>

          <div className="flex justify-center flex-col md:flex-row">
            <div className="text-[#4E4B66] mb-3 md:mb-0">
              <input className="border-2 mr-[24px] py-[4px] pl-[5px]  rounded-[4px]" type="date" defaultValue={date} onChange={(e) => setDate(e.target.value)} />
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

        <div className="px-3 md:px-[79px] pt-6 md:pt-[72px] mb-7 md:mb-[66px] flex">
          <div className="flex">
            <div className="border-2 rounded-[8px] py-3 md:py-[24px] bg-white md:mr-[32px]">
              <div className="flex pl-3 md:pl-[41px] pr-3 md:pr-[24px]">
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
                <div className="w-full md:w-[381px] pl-3 md:pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold flex-wrap">
                    {schedule?.times?.map((time) => (
                      <button
                        className={` mb-[16px] ${schedule.cinema === selectedCinema && time === selectedTime && "text-violet-700 font-bold"}`}
                        onClick={() => selectTime(time, schedule.cinema, schedule.price, schedule.title, schedule.cinemapicture, movieDetail.genre)}
                      >
                        <span className="mr-5 md:mr-[40px]">{time}</span>
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

              <div className="flex pl-3 md:pl-[32px] pr-[24px] text-[16px] mb-[32px]">
                <div className="flex-1 text-[#6B6B6B] ">Price</div>
                <div className="font-semibold">IDR.{schedule.price}/seat</div>
              </div>
              <div className="px-3 md:px-[32px] flex justify-center text-center">
                <button disabled={selectedCinema !== schedule.cinema} onClick={book} className="rounded-[8px] w-full py-[4px] bg-[#f1554c] text-white font-bold">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-3 md:px-[70px] justify-center items-center">
          <hr className="w-[80px] md:w-[523px] " />
          <div className="text-[#f1554c] text-[16px] px-3 md:px-[23px]">view more</div>
          <hr className="w-[80px] md:w-[523px]" />
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Moviedetails;
