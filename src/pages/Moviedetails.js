import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Navigate } from "react-router-dom";
import http from "../helpers/http";
import { useDispatch } from "react-redux";
import { chooseMovie as chooseMovieAction } from "../redux/reducers/transaction";

const Moviedetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = React.useState({});
  const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [cityList, setCityList] = React.useState([]);
  const [city, setCity] = React.useState({});
  const [schedule, setSchedule] = React.useState([]);
  const [selectedTime, setSelectedTime] = React.useState("");
  const [selectedCinema, setSelectedCinema] = React.useState(null);

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
    console.log(data);
  };

  const getCinemas = async () => {
    const { data } = await axios.get("http://localhost:8888/cinemas");
    setCityList(data.results);
    console.log(data);
    if (data.results.length) {
      setCity(data.results[0].name);
    }
  };

  const getSchedule = async () => {
    const { data } = await axios.get(`http://localhost:8888/movieSchedules/${id}`);
    setSchedule(data.results);
    console.log(data);
  };
  console.log(schedule);
  const selectTime = (time, cinema) => {
    setSelectedTime(time);
    setSelectedCinema(cinema);
  };

  const book = () => {
    dispatch(
      chooseMovieAction({
        movieId: id,
        cinemaId: selectedCinema,
        bookingDate: date,
        bookingTime: selectedTime,
      })
    );
    navigate("/orderpage");
  };

  return (
    <div>
      <nav className="flex flex-1 pt-[36px] px-[79px]">
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
        <div className=" pt-[23px] pr-[50px]">
          <img className="w-[18px]" src={require("../assets/images/search.png")} alt="Search" />
        </div>
        <div className=" items-center pt-[13px]">
          <img className="w-[56px]" src={require("../assets/images/Profile.png")} alt="Profile" />
        </div>
      </nav>

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
            <div className="mr-[72px]">{movieDetail.duration}</div>
            <div>Tom Holland, Michael Keaton, Robert Downey Jr., ...</div>
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
          {cityList.map((cinema) => (
            <div className="flex">
              <div className="border-2 rounded-[8px] py-[24px] bg-white mr-[32px]">
                <div className="flex pl-[41px] pr-[24px]">
                  <div className="pt-[15px]">
                    <img className="w-[106px] h-[40px]" src={require("../assets/images/ebu.png")} alt="Ebu" />
                  </div>
                  <div className="pl-[46px]">
                    <div className="text-[24px] font-semibold leading-8 tracking-[.75px]">{cinema.name}</div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">{cinema.address}</div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">{cinema.city}</div>
                  </div>
                </div>
                <hr className="mt-[24px] mb-[16px]" />
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    <button className={`mr-[32px] ${cinema === selectedCinema && schedule.times === selectedTime && "text-violet-700 font-bold"}`} onClick={() => selectTime(schedule.times, cinema)}>
                      {schedule.times}
                    </button>
                  </div>
                </div>
                <div className="flex pl-[32px] pr-[24px] text-[16px] mb-[32px]">
                  <div className="flex-1 text-[#6B6B6B] ">Price</div>
                  <div className="font-semibold">$10.00/seat</div>
                </div>
                <div className="flex justify-center text-center">
                  <button disabled={selectedCinema !== cinema} onClick={book} className="border-2 rounded-[8px] pl-[112px] pr-[112px] py-[4px] bg-[#5F2EEA] text-white">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex px-[70px] justify-center items-center">
          <hr className="w-[523px] " />
          <div className="text-[#5F2EEA] text-[16px] px-[23px]">view more</div>
          <hr className="w-[523px]" />
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
      <div className="text-center text-[#4E4B66] text-[14px] pt-[70px] tracking-[.5px] leading-[18px] mb-[48px]">© 2020 Tickitz. All Rights Reserved.</div>
    </div>
  );
};

export default Moviedetails;
