/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageSchedule = () => {
  const [movieDetail, setMovieDetail] = React.useState({});

  const getMovieDetail = async () => {
    const { data } = await axios.get('https://fw12-backend-shr6.vercel.app/movies/1');
    return data;
  };

  React.useEffect(() => {
    getMovieDetail().then((data) => {
      setMovieDetail(data);
    });
  }, []);

  return (
    <div>
      <nav className="flex flex-1 pt-[36px] px-[79px]">
        <div>
          <img className="mr-[81px]" src={require('../assets/images/navlogo.png')} alt="navlogo" />
        </div>
        <div className="flex-1 items-center content-center pt-[13px]">
          <Link className="pt-[13px] mr-[50px]" to="/home">
            Dashboard
          </Link>
          <Link className="pt-[13px]  mr-[50px]" to="/home">
            Manage Movie
          </Link>
          <Link className="pt-[13px]" to="/home">
            Manage Schedule
          </Link>
        </div>
        <div className=" pt-[23px] pr-[50px]">
          <img className="w-[18px]" src={require('../assets/images/search.png')} alt="Search" />
        </div>
        <div className=" items-center pt-[13px]">
          <img className="w-[56px]" src={require('../assets/images/Profile.png')} alt="Profile" />
        </div>
      </nav>
      <div className="bg-[#E5E5E5]">
        <div className="pt-[56px] pb-[24px] px-[70px]">
          <div className="text-[24px] font-bold">Form Movie</div>
        </div>
        <div className=" px-[70px]">
          <div className="px-[40px]  mb-[80px] pt-[40px] border-2 bg-white rounded-[8px]">
            <div className="flex">
              <div className="border-box border-2 p-[32px] rounded-[8px] mr-[28px]">
                <img className="w-[177px] h-[272px]" src={require('../assets/images/spidey.png')} alt="Spiderman" />
              </div>
              <div className="w-[850px] text-[#4E4B66] text-[16px] tracking-[.75px]">
                <div className="">
                  <div className="flex mb-[12px]">
                    <div className="mr-[405px]">Movie</div>
                    <div>Location</div>
                  </div>
                  <div className="flex mb-[12px]">
                    <div className="mr-[48px]  border-2 rounded-[4px]  py-[20px] pl-[24px] pr-[20px] bg-[#FCFDFE] w-full">
                      <select className="pr-[220px] bg-[#FCFDFE]">
                        <option value="">Select Movie</option>
                      </select>
                    </div>
                    <div className=" border-2 rounded-[4px]  py-[20px] pl-[24px] pr-[40px] bg-[#FCFDFE]">
                      <select className="pr-[200px] bg-[#FCFDFE]">
                        <option className="">Select Location</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex mb-[12px]">
                    <div className="mr-[415px]">Price</div>
                    <div className="mr-[135px]">Date Start</div>
                    <div>Date End</div>
                  </div>
                  <div className="flex mb-[23px]">
                    <div className=" border-2 rounded-[4px] mr-[50px] py-[20px] pl-[24px] pr-[330px] bg-[#FCFDFE] w-full">10</div>
                    <div className="border-2 rounded-[4px] py-[20px] pl-[24px] pr-[66px] mr-[33px] bg-[#FCFDFE]">07/05/2020</div>
                    <div className="border-2 rounded-[4px] py-[20px] pl-[24px] pr-[66px] bg-[#FCFDFE] w-full">07/07/2020</div>
                  </div>
                </div>

                <div className="">
                  <div className="flex mb-[12px]">
                    <div className="mr-[405px]">Premiere</div>
                    <div>Time</div>
                  </div>
                  <div className="flex ">
                    <div className="mr-[128px] flex items-center">
                      <img className="mr-[45px] w-[92px] h-[31px]" src={require('../assets/images/ebv2.png')} alt="Ebu" />
                      <img className="mr-[45px] w-[92px] h-[31px]" src={require('../assets/images/hiflix2.png')} alt="hiflix" />
                      <img className="mr-[73px] w-[92px] h-[31px]" src={require('../assets/images/cineone2.png')} alt="cineone" />
                    </div>
                    <div className="">
                      <div className="flex flex-wrap items-center pl-[75px]">
                        <div className="">
                          <Link to="/">
                            {' '}
                            <img src={require('../assets/images/plus.png')} alt="plus" className="border-2 border-[#5F2EEA] text-[#5F2EEA] text-[24px] rounded-[8px] px-[10px] mb-[13px]" />
                          </Link>
                        </div>
                        <div className="flex">
                          <div className="mb-[13px] flex-1 font-semibold tracking-[.75px] pl-[60px] ">08:30am</div>
                          <div className="mb-[13px] flex-1 font-semibold tracking-[.75px]  pl-[37px] ">10:30pm</div>
                          <div className="mb-[13px] flex-1 font-semibold tracking-[.75px]  pl-[40px]">12:00pm</div>
                        </div>
                        <div className="flex">
                          <div className="mb-[13px] flex-1 font-semibold tracking-[.75px]  mr-[36px]">04:30pm</div>
                          <div className="mb-[13px] flex-1 font-semibold tracking-[.75px]  mr-[36px]">07:00pm</div>
                          <div className="mb-[13px] flex-1 font-semibold tracking-[.75px]  mr-[36px]">08:30pm</div>
                          <div className="mb-[13px] font-semibold tracking-[.75px]  ">08:30pm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-end text-[#5F2EEA] text-[16px] mb-[53px] pt-[74px]">
              <button type="submit" className="mr-[23px] border-2 border-[#5F2EEA] px-[50px] py-[5px] rounded-[4px]">Reset</button>
              <button type="submit" className=" border-2 border-[#5F2EEA] px-[50px] py-[5px] rounded-[4px]">Submit</button>
            </div>
          </div>
        </div>
        <div className="flex mb-[40px]  px-[70px]">
          <div className="flex-1">
            <div className="flex-1 text-[24px] font-bold ">Data Schedule</div>
          </div>
          <div className="flex items-center">
            <div className=" mb-[28px] text-[#4E4B66] text-[16px] mr-[20px] border-2  pl-[11px] py-[8px] rounded-[16px] bg-[#FCFDFE] bg-[#FCFDFE] pr-[10px]">
              <select className="pr-[40px] bg-[#FCFDFE]">
                <option value="" className="">
                  Sort
                </option>
              </select>
            </div>
            <div className=" mb-[28px] text-[#4E4B66] text-[16px] mr-[20px] border-2  pl-[11px] py-[8px] rounded-[16px] bg-[#FCFDFE] bg-[#FCFDFE] pr-[10px]">
              <select className="pr-[40px] bg-[#FCFDFE]">
                <option value="" className="">
                  Location
                </option>
              </select>
            </div>
            <div className=" mb-[28px] text-[#4E4B66] text-[16px]  border-2  pl-[11px] py-[8px] rounded-[16px] bg-[#FCFDFE] bg-[#FCFDFE] pr-[10px]">
              <select className="pr-[40px] bg-[#FCFDFE]">
                <option value="" className="">
                  Movie
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="px-[70px]  pb-[34px]">
          <div className="pt-[34px] px-[26px] pb-[40px] bg-white rounded-[6px]">
            <div className="flex mb-[31px]">
              <div className="border-2 rounded-[8px] pt-[24px] bg-white flex-1 mr-[32px]">
                <div className="flex pl-[41px] pr-[24px]">
                  <div className="pt-[15px]">
                    <img className="w-[106px] h-[40px]" src={require('../assets/images/ebu.png')} alt="Ebu" />
                  </div>
                  <div className="pl-[46px]">
                    <div className="text-[24px] font-semibold leading-8 tracking-[.75px]">ebv.id</div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">Whatever street No.12, </div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">South Purwokerto</div>
                  </div>
                </div>
                <hr className="mt-[24px] mb-[16px]" />
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    <div className="mr-[32px] text-[#4E4B66]">08:30am</div>
                    <div className="mr-[32px] text-[#6E7191]">10:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">12:00pm</div>
                    <div className="text-[#5F2EEA]">02:00pm</div>
                  </div>
                  <div className="flex mb-[24px] font-semibold">
                    <div className="mr-[32px] text-[#6E7191]">04:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">07:00pm</div>
                    <div className="text-[#6E7191]">08:30pm</div>
                  </div>
                </div>
                <div className="flex pl-[32px] pr-[24px] text-[16px] mb-[25px]">
                  <div className="flex-1 text-[#6B6B6B] ">Price</div>
                  <div className="font-semibold">$10.00/seat</div>
                </div>
                <div className="flex justify-center text-center px-[23px] mb-[31px]">
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[18px]">
                    Update
                  </button>
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#ED2E7E] text-[#ED2E7E]">
                    Delete
                  </button>
                </div>
              </div>
              <div className="border-2 rounded-[8px] pt-[24px] bg-white flex-1 mr-[32px]">
                <div className="flex pl-[41px] pr-[24px]">
                  <div className="pt-[15px]">
                    <img className="w-[106px] h-[40px]" src={require('../assets/images/cineone.png')} alt="cineone" />
                  </div>
                  <div className="pl-[46px]">
                    <div className="text-[24px] font-semibold leading-8 tracking-[.75px]">CineOne21</div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">Whatever street No.12, </div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">South Purwokerto</div>
                  </div>
                </div>
                <hr className="mt-[24px] mb-[16px]" />
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    <div className="mr-[32px] text-[#4E4B66]">08:30am</div>
                    <div className="mr-[32px] text-[#6E7191]">10:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">12:00pm</div>
                    <div className="text-[#5F2EEA]">02:00pm</div>
                  </div>
                  <div className="flex mb-[24px] font-semibold">
                    <div className="mr-[32px] text-[#6E7191]">04:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">07:00pm</div>
                    <div className="text-[#6E7191]">08:30pm</div>
                  </div>
                </div>
                <div className="flex pl-[32px] pr-[24px] text-[16px] mb-[25px]">
                  <div className="flex-1 text-[#6B6B6B] ">Price</div>
                  <div className="font-semibold">$10.00/seat</div>
                </div>
                <div className="flex justify-center text-center px-[23px] mb-[31px]">
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[18px]">
                    Update
                  </button>
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#ED2E7E] text-[#ED2E7E]">
                    Delete
                  </button>
                </div>
              </div>
              <div className="border-2 rounded-[8px] pt-[24px] bg-white flex-1 mr-[32px]">
                <div className="flex pl-[41px] pr-[24px]">
                  <div className="pt-[15px]">
                    <img className="w-[106px] h-[40px]" src={require('../assets/images/hiflix.png')} alt="hiflix" />
                  </div>
                  <div className="pl-[37px]">
                    <div className="text-[24px] font-semibold leading-8 tracking-[.75px]">hiflix Cinema</div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">Whatever street No.12, </div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">South Purwokerto</div>
                  </div>
                </div>
                <hr className="mt-[24px] mb-[16px]" />
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    <div className="mr-[32px] text-[#4E4B66]">08:30am</div>
                    <div className="mr-[32px] text-[#6E7191]">10:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">12:00pm</div>
                    <div className="text-[#5F2EEA]">02:00pm</div>
                  </div>
                  <div className="flex mb-[24px] font-semibold">
                    <div className="mr-[32px] text-[#6E7191]">04:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">07:00pm</div>
                    <div className="text-[#6E7191]">08:30pm</div>
                  </div>
                </div>
                <div className="flex pl-[32px] pr-[24px] text-[16px] mb-[25px]">
                  <div className="flex-1 text-[#6B6B6B] ">Price</div>
                  <div className="font-semibold">$10.00/seat</div>
                </div>
                <div className="flex justify-center text-center px-[23px] mb-[31px]">
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[18px]">
                    Update
                  </button>
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#ED2E7E] text-[#ED2E7E]">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border-2 rounded-[8px] pt-[24px] bg-white flex-1 mr-[32px]">
                <div className="flex pl-[41px] pr-[24px]">
                  <div className="pt-[15px]">
                    <img className="w-[106px] h-[40px]" src={require('../assets/images/ebu.png')} alt="Ebu" />
                  </div>
                  <div className="pl-[46px]">
                    <div className="text-[24px] font-semibold leading-8 tracking-[.75px]">ebv.id</div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">Whatever street No.12, </div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">South Purwokerto</div>
                  </div>
                </div>
                <hr className="mt-[24px] mb-[16px]" />
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    <div className="mr-[32px] text-[#4E4B66]">08:30am</div>
                    <div className="mr-[32px] text-[#6E7191]">10:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">12:00pm</div>
                    <div className="text-[#5F2EEA]">02:00pm</div>
                  </div>
                  <div className="flex mb-[24px] font-semibold">
                    <div className="mr-[32px] text-[#6E7191]">04:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">07:00pm</div>
                    <div className="text-[#6E7191]">08:30pm</div>
                  </div>
                </div>
                <div className="flex pl-[32px] pr-[24px] text-[16px] mb-[25px]">
                  <div className="flex-1 text-[#6B6B6B] ">Price</div>
                  <div className="font-semibold">$10.00/seat</div>
                </div>
                <div className="flex justify-center text-center px-[23px] mb-[31px]">
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[18px]">
                    Update
                  </button>
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#ED2E7E] text-[#ED2E7E]">
                    Delete
                  </button>
                </div>
              </div>
              <div className="border-2 rounded-[8px] pt-[24px] bg-white flex-1 mr-[32px]">
                <div className="flex pl-[41px] pr-[24px]">
                  <div className="pt-[15px]">
                    <img className="w-[106px] h-[40px]" src={require('../assets/images/cineone.png')} alt="cineone" />
                  </div>
                  <div className="pl-[46px]">
                    <div className="text-[24px] font-semibold leading-8 tracking-[.75px]">CineOne21</div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">Whatever street No.12, </div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">South Purwokerto</div>
                  </div>
                </div>
                <hr className="mt-[24px] mb-[16px]" />
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    <div className="mr-[32px] text-[#4E4B66]">08:30am</div>
                    <div className="mr-[32px] text-[#6E7191]">10:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">12:00pm</div>
                    <div className="text-[#5F2EEA]">02:00pm</div>
                  </div>
                  <div className="flex mb-[24px] font-semibold">
                    <div className="mr-[32px] text-[#6E7191]">04:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">07:00pm</div>
                    <div className="text-[#6E7191]">08:30pm</div>
                  </div>
                </div>
                <div className="flex pl-[32px] pr-[24px] text-[16px] mb-[25px]">
                  <div className="flex-1 text-[#6B6B6B] ">Price</div>
                  <div className="font-semibold">$10.00/seat</div>
                </div>
                <div className="flex justify-center text-center px-[23px] mb-[31px]">
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[18px]">
                    Update
                  </button>
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#ED2E7E] text-[#ED2E7E]">
                    Delete
                  </button>
                </div>
              </div>
              <div className="border-2 rounded-[8px] pt-[24px] bg-white flex-1 mr-[32px]">
                <div className="flex pl-[41px] pr-[24px]">
                  <div className="pt-[15px]">
                    <img className="w-[106px] h-[40px]" src={require('../assets/images/hiflix.png')} alt="hiflix" />
                  </div>
                  <div className="pl-[37px]">
                    <div className="text-[24px] font-semibold leading-8 tracking-[.75px]">hiflix Cinema</div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">Whatever street No.12, </div>
                    <div className="text-[12px] leading-[18px] tracking-[.75px] text-[#6E7191]">South Purwokerto</div>
                  </div>
                </div>
                <hr className="mt-[24px] mb-[16px]" />
                <div className=" pl-[32px] text-[12px]">
                  <div className="flex mb-[16px] font-semibold">
                    <div className="mr-[32px] text-[#4E4B66]">08:30am</div>
                    <div className="mr-[32px] text-[#6E7191]">10:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">12:00pm</div>
                    <div className="text-[#5F2EEA]">02:00pm</div>
                  </div>
                  <div className="flex mb-[24px] font-semibold">
                    <div className="mr-[32px] text-[#6E7191]">04:30pm</div>
                    <div className="mr-[32px] text-[#A0A3BD]">07:00pm</div>
                    <div className="text-[#6E7191]">08:30pm</div>
                  </div>
                </div>
                <div className="flex pl-[32px] pr-[24px] text-[16px] mb-[25px]">
                  <div className="flex-1 text-[#6B6B6B] ">Price</div>
                  <div className="font-semibold">$10.00/seat</div>
                </div>
                <div className="flex justify-center text-center px-[23px] mb-[31px]">
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#5F2EEA] text-[#5F2EEA] mr-[18px]">
                    Update
                  </button>
                  <button type="submit" className="border-2 rounded-[8px] pl-[47.5px] pr-[47.5px] py-[4px] border-[#ED2E7E] text-[#ED2E7E]">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-[49px]">
          <div className="flex text-[18px]">
            <button type="submit" className="border-1 bg-white p-[20px] rounded-[8px] mr-[8px] hover:bg-[#5F2EEA]">1</button>
            <button type="submit" className="border-1 bg-white p-[20px] rounded-[8px] mr-[8px] hover:bg-[#5F2EEA]">2</button>
            <button type="submit" className="border-1 bg-white p-[20px] rounded-[8px] mr-[8px] hover:bg-[#5F2EEA]">3</button>
            <button type="submit" className="border-1 bg-white p-[20px] rounded-[8px] hover:bg-[#5F2EEA]">4</button>
          </div>
        </div>
      </div>

      <footer className="flex px-[136px]">
        <div className="pt-[110px] flex-1">
          <img src={require('../assets/images/logoreal.png')} alt="logo footer" />
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
          <img className="mb-[30px]" src={require('../assets/images/pic1.png')} alt="ebu" />
          <img className="mb-[30px]" src={require('../assets/images/pic2.png')} alt="cineone" />
          <img className="mb-[30px]" src={require('../assets/images/pic3.png')} alt="hiflix" />
        </div>
        <div className="pt-[110px] flex-1">
          <div className="mb-[35px] font-bold">Follow us</div>
          <div className="flex flex-row mb-[28px]">
            <img className="mr-[22px]" src={require('../assets/images/facebook.png')} alt="facebook" />
            <div>Tickitz Cinema id</div>
          </div>
          <div className="flex flex-row mb-[28px]">
            <img className="mr-[15px]" src={require('../assets/images/instagram.png')} alt="instagram" />
            <div>tickitz.id</div>
          </div>
          <div className="flex flex-row mb-[28px]">
            <img className="mr-[22px]" src={require('../assets/images/twitter.png')} alt="twitter" />
            <div>tickitz.id</div>
          </div>
          <div className="flex flex-row">
            <img className="mr-[20px]" src={require('../assets/images/youtube.png')} alt="youtube" />
            <div>Tickitz Cinema id</div>
          </div>
        </div>
      </footer>
      <div className="text-center text-[#4E4B66] text-[14px] pt-[70px] tracking-[.5px] leading-[18px] mb-[48px]">© 2020 Tickitz. All Rights Reserved.</div>
    </div>
  );
}

export default ManageSchedule;
