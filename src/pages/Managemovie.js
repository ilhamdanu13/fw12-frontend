/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageMovie = () => {
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
                    <div className="mr-[340px]">Movie Name</div>
                    <div>Category</div>
                  </div>
                  <div className="flex mb-[12px]">
                    <div className=" border-2 rounded-[4px] mr-[48px] py-[20px] pl-[24px] pr-[160px]">Spider-Man: Homecoming</div>
                    <div className="border-2 rounded-[4px] py-[20px] pl-[24px] pr-[177px]">Action, Adventure, Sci-Fi</div>
                  </div>
                </div>
                <div>
                  <div className="flex mb-[12px]">
                    <div className="mr-[375px]">Director</div>
                    <div>Casts</div>
                  </div>
                  <div className="flex mb-[12px]">
                    <div className=" border-2 rounded-[4px] mr-[48px] py-[20px] pl-[24px] pr-[287px]">Jon Watts</div>
                    <div className="border-2 rounded-[4px] py-[20px] pl-[24px] pr-[37px]">Tom Holland, Michael Keaton, Robert Dow..</div>
                  </div>
                </div>
                <div>
                  <div className="flex mb-[12px]">
                    <div className="mr-[345px]">Release date</div>
                    <div className="mr-[85px]">Duration Hour</div>
                    <div>Duration Minute</div>
                  </div>
                  <div className="flex mb-[12px]">
                    <div className=" border-2 rounded-[4px] mr-[48px] py-[20px] pl-[24px] pr-[275px]">07/05/2020</div>
                    <div className="border-2 rounded-[4px] py-[20px] pl-[24px] pr-[145px] mr-[33px]">2</div>
                    <div className="border-2 rounded-[4px] py-[20px] pl-[24px] pr-[140px]">13</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[25px] pb-[41px]">
              <div className="text-[20px] font-semibold mb-[12px]">Synopsis</div>
              <div className="border-2 rounded-[4px]">
                <div className="text-[16px] tracking-[.75px] leading-[32px] pl-[40px] py-[8px]">Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | . </div>
              </div>
            </div>

            <div className="flex flex-row justify-end text-[#5F2EEA] text-[16px] mb-[53px]">
              <button type="submit" className="mr-[23px] border-2 border-[#5F2EEA] px-[50px] py-[5px] rounded-[4px]">Reset</button>
              <button type="submit" className=" border-2 border-[#5F2EEA] px-[50px] py-[5px] rounded-[4px]">Submit</button>
            </div>
          </div>
        </div>
        <div className="flex mb-[40px]  px-[70px]">
          <div className="flex-1 text-[24px] font-bold ">Data Movie</div>
          <div className="flex pr-[25px] pl-[10px] py-[5px] border-2 box-border rounded-[12px] mr-[20px]content-center mr-[12px] bg-white">
            <span className="mr-[10px]">Sort</span>
            <div className="pt-[7px] pl-[10px] ml-[12px]">
              <img className="w-[15px] h-[10px]" src={require('../assets/images/down.png')} alt="Search" />
            </div>
          </div>
          <div>
            <input className="form-input pl-5 py-[5px] border-2 box-border rounded-[12px]" type="text" placeholder="Search Movie Name..." />
          </div>
        </div>
        <div className="px-[70px]">
          <div className="pl-[75px]  mb-[24px] pt-[40px] border-2 bg-white rounded-[8px] flex flex-wrap pb-[20px]">
            <div className=" border-2 rounded-[8px] text-center mr-[43px] mb-[21px] ">
              <div className="">
                <div className="p-[33px] ">
                  <img className="" src={require('../assets/images/Black Widow.png')} alt="Black Wdidow" />
                </div>
                <div className="text-[18px] tracking-[.15px] text-[#14142B] font-bold">
                  <div>Black Widow</div>
                </div>
                <div className="text-[#A0A3BD] text-[12px] tracking-[.4px]">
                  <div>Action, Adventure, Sci-Fi</div>
                </div>
                <div className="px-[32px] pt-[18px] mb-[11px] text-[#5F2EEA]">
                  <button type="submit" className="border-2 border-[#5F2EEA] py-[5px] px-[48px] rounded-[4px]">Update</button>
                </div>
                <div className="text-[#ED2E7E] mb-[28px]">
                  <button type="submit" className="border-2 border-[#ED2E7E] py-[5px] px-[50px] rounded-[4px]">Delete</button>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-[8px] text-center mr-[43px] mb-[21px] ">
              <div className="">
                <div className="p-[33px] ">
                  <img className="" src={require('../assets/images/Black Widow.png')} alt="Black Wdidow" />
                </div>
                <div className="text-[18px] tracking-[.15px] text-[#14142B] font-bold">
                  <div>Black Widow</div>
                </div>
                <div className="text-[#A0A3BD] text-[12px] tracking-[.4px]">
                  <div>Action, Adventure, Sci-Fi</div>
                </div>
                <div className="px-[32px] pt-[18px] mb-[11px] text-[#5F2EEA]">
                  <button type="submit" className="border-2 border-[#5F2EEA] py-[5px] px-[48px] rounded-[4px]">Update</button>
                </div>
                <div className="text-[#ED2E7E] mb-[28px]">
                  <button type="submit" className="border-2 border-[#ED2E7E] py-[5px] px-[50px] rounded-[4px]">Delete</button>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-[8px] text-center mr-[43px] mb-[21px] ">
              <div className="">
                <div className="p-[33px] ">
                  <img className="" src={require('../assets/images/Black Widow.png')} alt="Black Wdidow" />
                </div>
                <div className="text-[18px] tracking-[.15px] text-[#14142B] font-bold">
                  <div>Black Widow</div>
                </div>
                <div className="text-[#A0A3BD] text-[12px] tracking-[.4px]">
                  <div>Action, Adventure, Sci-Fi</div>
                </div>
                <div className="px-[32px] pt-[18px] mb-[11px] text-[#5F2EEA]">
                  <button type="submit" className="border-2 border-[#5F2EEA] py-[5px] px-[48px] rounded-[4px]">Update</button>
                </div>
                <div className="text-[#ED2E7E] mb-[28px]">
                  <button type="submit" className="border-2 border-[#ED2E7E] py-[5px] px-[50px] rounded-[4px]">Delete</button>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-[8px] text-center mr-[43px] mb-[21px] ">
              <div className="">
                <div className="p-[33px] ">
                  <img className="" src={require('../assets/images/Black Widow.png')} alt="Black Wdidow" />
                </div>
                <div className="text-[18px] tracking-[.15px] text-[#14142B] font-bold">
                  <div>Black Widow</div>
                </div>
                <div className="text-[#A0A3BD] text-[12px] tracking-[.4px]">
                  <div>Action, Adventure, Sci-Fi</div>
                </div>
                <div className="px-[32px] pt-[18px] mb-[11px] text-[#5F2EEA]">
                  <button type="submit" className="border-2 border-[#5F2EEA] py-[5px] px-[48px] rounded-[4px]">Update</button>
                </div>
                <div className="text-[#ED2E7E] mb-[28px]">
                  <button type="submit" className="border-2 border-[#ED2E7E] py-[5px] px-[50px] rounded-[4px]">Delete</button>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-[8px] text-center mr-[43px] mb-[21px] ">
              <div className="">
                <div className="p-[33px] ">
                  <img className="" src={require('../assets/images/Black Widow.png')} alt="Black Wdidow" />
                </div>
                <div className="text-[18px] tracking-[.15px] text-[#14142B] font-bold">
                  <div>Black Widow</div>
                </div>
                <div className="text-[#A0A3BD] text-[12px] tracking-[.4px]">
                  <div>Action, Adventure, Sci-Fi</div>
                </div>
                <div className="px-[32px] pt-[18px] mb-[11px] text-[#5F2EEA]">
                  <button type="submit" className="border-2 border-[#5F2EEA] py-[5px] px-[48px] rounded-[4px]">Update</button>
                </div>
                <div className="text-[#ED2E7E] mb-[28px]">
                  <button type="submit" className="border-2 border-[#ED2E7E] py-[5px] px-[50px] rounded-[4px]">Delete</button>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-[8px] text-center mr-[43px] mb-[21px] ">
              <div className="">
                <div className="p-[33px] ">
                  <img className="" src={require('../assets/images/Black Widow.png')} alt="Black Wdidow" />
                </div>
                <div className="text-[18px] tracking-[.15px] text-[#14142B] font-bold">
                  <div>Black Widow</div>
                </div>
                <div className="text-[#A0A3BD] text-[12px] tracking-[.4px]">
                  <div>Action, Adventure, Sci-Fi</div>
                </div>
                <div className="px-[32px] pt-[18px] mb-[11px] text-[#5F2EEA]">
                  <button type="submit" className="border-2 border-[#5F2EEA] py-[5px] px-[48px] rounded-[4px]">Update</button>
                </div>
                <div className="text-[#ED2E7E] mb-[28px]">
                  <button type="submit" className="border-2 border-[#ED2E7E] py-[5px] px-[50px] rounded-[4px]">Delete</button>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-[8px] text-center mr-[43px] mb-[21px] ">
              <div className="">
                <div className="p-[33px] ">
                  <img className="" src={require('../assets/images/Black Widow.png')} alt="Black Wdidow" />
                </div>
                <div className="text-[18px] tracking-[.15px] text-[#14142B] font-bold">
                  <div>Black Widow</div>
                </div>
                <div className="text-[#A0A3BD] text-[12px] tracking-[.4px]">
                  <div>Action, Adventure, Sci-Fi</div>
                </div>
                <div className="px-[32px] pt-[18px] mb-[11px] text-[#5F2EEA]">
                  <button type="submit" className="border-2 border-[#5F2EEA] py-[5px] px-[48px] rounded-[4px]">Update</button>
                </div>
                <div className="text-[#ED2E7E] mb-[28px]">
                  <button type="submit" className="border-2 border-[#ED2E7E] py-[5px] px-[50px] rounded-[4px]">Delete</button>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-[8px] text-center mr-[43px] mb-[21px] ">
              <div className="">
                <div className="p-[33px] ">
                  <img className="" src={require('../assets/images/Black Widow.png')} alt="Black Wdidow" />
                </div>
                <div className="text-[18px] tracking-[.15px] text-[#14142B] font-bold">
                  <div>Black Widow</div>
                </div>
                <div className="text-[#A0A3BD] text-[12px] tracking-[.4px]">
                  <div>Action, Adventure, Sci-Fi</div>
                </div>
                <div className="px-[32px] pt-[18px] mb-[11px] text-[#5F2EEA]">
                  <button type="submit" className="border-2 border-[#5F2EEA] py-[5px] px-[48px] rounded-[4px]">Update</button>
                </div>
                <div className="text-[#ED2E7E] mb-[28px]">
                  <button type="submit" className="border-2 border-[#ED2E7E] py-[5px] px-[50px] rounded-[4px]">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-[45px]">
            <div className="flex text-[18px]">
              <button type="submit" className="border-1 bg-white p-[20px] rounded-[8px] mr-[8px] hover:bg-[#5F2EEA]">1</button>
              <button type="submit" className="border-1 bg-white p-[20px] rounded-[8px] mr-[8px] hover:bg-[#5F2EEA]">2</button>
              <button type="submit" className="border-1 bg-white p-[20px] rounded-[8px] mr-[8px] hover:bg-[#5F2EEA]">3</button>
              <button type="submit" className="border-1 bg-white p-[20px] rounded-[8px] hover:bg-[#5F2EEA]">4</button>
            </div>
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

export default ManageMovie;
