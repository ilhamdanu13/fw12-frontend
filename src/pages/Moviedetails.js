/* eslint-disable max-len */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import http from '../helpers/http';
import { chooseMovie as chooseMovieAction } from '../redux/reducers/transaction';
import NavbarUser from '../components/NavbarUser';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

function Moviedetails() {
  const token = useSelector((state) => state?.auth?.token);
  const decode = jwtDecode(token);
  const userId = decode.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = React.useState({});
  const [date, setDate] = React.useState(moment().format('YYYY-MM-DD'));
  const [cinema, setCinema] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [city, setCity] = React.useState({});
  const [schedule, setSchedule] = React.useState({});
  const [selectedPrice, setSelectedPrice] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');
  const [selectedCinemaName, setSelectedCinemaName] = React.useState(null);
  const [selectedCinemaId, setSelectedCinemaId] = React.useState(null);
  const [selectedCinemaPicture, setSelectedCinemaPicture] = React.useState('');
  const [selectedMovie, setSelectedMovie] = React.useState('');
  const [selectedGenre, setSelectedGenre] = React.useState('');

  const duration = movieDetail?.duration;
  const hour = String(duration).split(':').slice(0, 1).join(':');
  const minute = String(duration).split(':')[1];

  const NewDate = new Date(movieDetail?.releaseDate).toDateString();
  const month = NewDate.split(' ')[1];
  const dates = NewDate.split(' ')[2];
  const year = NewDate.split(' ')[3];

  const getMovieDetail = async () => {
    const { data } = await http(token).get(`https://fw12-backend-shr6.vercel.app/movies/${id}`);
    setMovieDetail(data.results);
  };

  const getCinemas = async () => {
    const { data } = await http(token).get('https://fw12-backend-shr6.vercel.app/cinemas');
    setCinema(data.results);
    if (data.results.length) {
      setCity(data.results[0].name);
    }
  };

  const getSchedule = async () => {
    const { data } = await http(token).get(`https://fw12-backend-shr6.vercel.app/movieSchedules/${id}`);
    setSchedule(data.results);
  };

  React.useEffect(() => {
    getMovieDetail();
    getCinemas();
    getSchedule();
  }, []);

  const selectTime = (time, cinemaName, price, title, cinemaPicture, genre, cinemaId) => {
    setSelectedTime(time);
    setSelectedCinemaName(cinemaName);
    setSelectedPrice(price);
    setSelectedMovie(title);
    setSelectedCinemaPicture(cinemaPicture);
    setSelectedGenre(genre);
    setSelectedCinemaId(cinemaId);
  };

  const book = () => {
    dispatch(
      chooseMovieAction({
        userId,
        movieId: id,
        cinemaName: selectedCinemaName,
        bookingDate: date,
        bookingTime: selectedTime,
        price: selectedPrice,
        movieName: selectedMovie,
        cinemaPicture: selectedCinemaPicture,
        genre: selectedGenre,
        cinemaId: selectedCinemaId,
      }),
    );
    navigate('/orderpage');
  };

  console.log(schedule);

  return (
    <div>
      <NavbarUser />
      <div className="px-3 lg:px-[79px] lg:flex mb-5 lg:mb-[80px] pt-[40px]">
        <div className="flex justify-center items-center">
          <div className="border-box border-2 p-[32px] rounded-[8px] lg:mr-[28px] mb-3 lg:mb-0 flex justify-center items-center">
            <img className="w-[236px] h-[362px] rounded-[4px]" src={movieDetail.picture} alt={movieDetail.title} />
          </div>
        </div>
        <div className="lg:w-[850px]">
          <div className="mb-[32px] font-Mulish">
            <div className="text-[#14142B] text-[32px] font-bold">{movieDetail.title}</div>
            <div className="text-[#4E4B66] text-[18px]">{movieDetail.genre}</div>
          </div>
          <div className="text-[#8692A6] text-[14px] flex font-Mulish">
            <div className="mr-[181px]">Release date</div>
            <div className="hidden lg:block">Directed by</div>
          </div>
          <div className="flex mb-[16px] text-[#121212] text-[16px]">
            <div className="mr-[177px] text-[#12121] font-Mulish">
              {month}
              {' '}
              {dates}
              ,
              {' '}
              {year}
            </div>
            <div className="text-[#12121] font-Mulish hidden lg:block">{movieDetail.director}</div>
          </div>
          <div className="flex text-[#8692A6] text-[14px] font-Mulish">
            <div className="mr-[210px]">Duration</div>
            <div className="hidden lg:block">Casts</div>
          </div>
          <div className="flex mb-[24px] text-[#121212] text-[16px]">
            <div className="mr-[117px] text-[#12121] font-Mulish">
              {hour}
              {' '}
              hours
              {minute}
              {' '}
              minutes
            </div>
            <div className="text-[#12121] font-Mulish hidden lg:block">
              {movieDetail.casts}
              , ...
            </div>
          </div>
          <div className="block lg:hidden mb-3">
            <div className="text-[#8692A6] text-[14px] font-Mulish">Directed by</div>
            <div className="text-[#12121] font-Mulish">{movieDetail.director}</div>
          </div>
          <div className="block lg:hidden mb-3 w-[250px]">
            <div className="text-[#8692A6] text-[14px] font-Mulish">Casts</div>
            <div className="text-[#12121] font-Mulish">
              {movieDetail.casts}
              , ...
            </div>
          </div>
          <hr className="mb-[16px]" />
          <div className="w-[280px] lg:w-auto">
            <div className="text-[20px] font-semibold mb-[4px] font-Mulish">Synopsis</div>
            <div className="text-[16px] tracking-[.75px] leading-[32px] text-[#12121] font-Mulish text-[#4E4B66]">{movieDetail.synopsis}</div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F8] py-5 lg:py-[78px]">
        <div className="text-center justify-center">
          <div className="text-[24px] font-bold mb-[24px]">Showtimes and Tickets</div>

          <div className="flex justify-center flex-col lg:flex-row">
            <div className="text-[#4E4B66] mb-3 lg:mb-0">
              <input className="border-2 mr-[24px] py-[4px] pl-[5px]  rounded-[4px]" type="date" defaultValue={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="text-[#4E4B66] ">
              <select onChange={(e) => setCity(e.target.value)} className="border-2 py-[5px] pl-[5px] pr-[100px] rounded-[4px]">
                {cinema.map((o) => (
                  <option>{o.city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="px-3 lg:px-[79px] pt-6 lg:pt-[72px] mb-7 lg:mb-[66px] flex">
          <div className="flex">
            <div className="border-2 rounded-[8px] py-3 lg:py-[24px] bg-white lg:mr-[32px]">
              <div className="flex pl-3 lg:pl-[41px] pr-3 lg:pr-[24px]">
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
                <div className="w-full lg:w-[381px] pl-3 lg:pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold flex-wrap">
                    {schedule?.times?.map((time) => (
                      <button
                        type="submit"
                        className={` mb-[16px] ${schedule.cinema === selectedCinemaName && time === selectedTime && 'text-violet-700 font-bold'}`}
                        onClick={() => selectTime(time, schedule.cinema, schedule.price, schedule.title, schedule.cinemapicture, movieDetail.genre, schedule.cinemaid)}
                      >
                        <span className="mr-5 lg:mr-[40px]">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    {schedule?.times?.map((time) => (
                      <button type="submit" className={`mr-[32px] ${schedule.cinema === selectedCinemaName && time === selectedTime && 'text-violet-700 font-bold'}`} onClick={() => window.alert('Please login')}>
                        <span className="mr-5">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex pl-3 lg:pl-[32px] pr-[24px] text-[16px] mb-[32px]">
                <div className="flex-1 text-[#6B6B6B] ">Price</div>
                <div className="font-semibold">
                  IDR.
                  {schedule.price}
                  /seat
                </div>
              </div>
              <div className="px-3 lg:px-[32px] flex justify-center text-center">
                <button type="submit" disabled={selectedCinemaName !== schedule.cinema} onClick={book} className="rounded-[8px] w-full py-[4px] bg-[#f1554c] text-white font-bold">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-3 lg:px-[70px] justify-center items-center">
          <hr className="w-[80px] lg:w-[523px] " />
          <div className="text-[#f1554c] text-[16px] px-3 lg:px-[23px]">view more</div>
          <hr className="w-[80px] lg:w-[523px]" />
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default Moviedetails;
