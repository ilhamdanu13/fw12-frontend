import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiChevronDown } from 'react-icons/fi';
import NavbarUser from '../components/NavbarUser';
import Month from '../components/Month';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import http from '../helpers/http';

const Viewall = () => {
  const token = useSelector((state) => state?.auth?.token);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [allMovie, setAllMovie] = React.useState({});

  const getAllMovie = async () => {
    const { data } = await http(token).get(`https://fw12-backend-red.vercel.app/movies?page=${page}&limit=8&search=${search}&sortBy=title&sort=${sort}`);
    return data;
  };

  React.useEffect(() => {
    getAllMovie().then((data) => {
      setAllMovie(data);
    });
  }, [page, sort, search]);
  return (
    <div>
      <NavbarUser />
      <div className="px-3 lg:px-[136px] bg-[#F5F6F8] pb-[32px]">
        <div className="lg:flex mb-[40px] pt-5 lg:pt-[57px]">
          <div className="flex-1 text-[18px] text-[24px] font-bold font-Mulish mb-3 lg:mb-0">List Movie</div>
          <select name="sort" onChange={(e) => setSort(e.target.value)} className="flex pr-[20px] pl-[10px] py-[5px] border-2 box-border rounded-[12px] items-center mr-[12px] bg-whit text-[#4E4B66] font-Mulish focus:outline-none">
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>

            <div className=" pl-[30px] ml-[12px] ">
              <FiChevronDown className="w-[20px] h-[20px] text-[#4E4B66]" />
            </div>
          </select>
          <div>
            <input name="search" onChange={(e) => setSearch(e.target.value)} className="form-input pl-5 py-[5px] border-2 box-border rounded-[12px] text-[#4E4B66] focus:outline-none" type="text" placeholder="Search Movie Name..." />
          </div>
        </div>
        <Month />
        {allMovie?.results?.map ? (
          <div className="lg:flex flex-wrap bg-white pl-3 lg:pl-[55px] pr-3 lg:pr-0 py-3 lg:py-[45px] rounded-[8px] mb-[32px]">
            {allMovie?.results?.map((char) => (
              <div className="pt-3 lg:pt-[56px] flex justify-center items-center">
                <div className="flex flex-col items-center border-box h-[452px] border-2 p-[32px] rounded-[8px] border-[#e9ecf4] lg:mr-[28px] text-center mb-[20px]">
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
                    <button type="submit" className=" border-2 px-[45px] py-[5px] rounded-[4px] text-[#f1554c] text-[14px] border-[#f1554c] hover:text-white hover:bg-[#f1554c] hover:font-semibold hover:shadow-xl duration-300">
                      <Link to={`/moviedetails/${char.id}`}>Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="pt-[56px] ">
            <div className="flex justify-center items-center bg-white pl-[55px] py-[45px] rounded-[8px] mb-[32px]">
              <span>Data not available</span>
            </div>
          </div>
        )}
        <div className="flex justify-center items-center ">
          <button type="submit" onClick={() => setPage(1)} className="mr-[8px] cursor-pointer">
            <div className=" w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center text-[18px] font-Mulish hover:bg-[#f1554c] hover:text-white hover:shadow-lg duration-500">1</div>
          </button>
          <button type="submit" onClick={() => setPage(2)} className="mr-[8px] cursor-pointer">
            <div className=" w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center text-[18px] font-Mulish hover:bg-[#f1554c] hover:text-white hover:shadow-lg duration-500">2</div>
          </button>
          <button type="submit" onClick={() => setPage(3)} className="mr-[8px] cursor-pointer">
            <div className=" w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center text-[18px] font-Mulish hover:bg-[#f1554c] hover:text-white hover:shadow-lg duration-500">3</div>
          </button>
          <button type="submit" onClick={() => setPage(4)} className="cursor-pointer">
            <div className=" w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center text-[18px] font-Mulish hover:bg-[#f1554c] hover:text-white hover:shadow-lg duration-500">4</div>
          </button>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default Viewall;
