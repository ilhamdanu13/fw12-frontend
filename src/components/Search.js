// import React from "react";
// import { FiChevronDown } from "react-icons/fi";
// import { useSelector } from "react-redux";
// import http from "../helpers/http";
// const Search = () => {
//   const token = useSelector((state) => state?.auth?.token)
//   const [sort, setSort] = React.useState('')
//   const [search, setSearch] = React.useState('')
//   const [allMovie, setAllMovie] = React.useState([])
//   const [page, setPage] = React.useState(1)
//   React.useEffect(() => {
//     getAllMovie().then((data) => {
//       setAllMovie(data)
//     })
//   },[page, sort, search])

//   const getAllMovie = async () => {
//     const {data} = await http(token).get(`/movies?page=${page}&limit=8&search=${search}&sortBy=title&sort={${sort}`)
//     return data
//   }

//   return (
//     <div className="flex mb-[40px] pt-[57px]">
//       <div className="flex-1 text-[24px] font-bold font-Mulish">List Movie</div>
//       <select className="flex pr-[20px] pl-[10px] py-[5px] border-2 box-border rounded-[12px] items-center mr-[12px] bg-whit text-[#4E4B66] font-Mulish focus:outline-none">
//         <option value="ASC">A-Z</option>
//         <option value="DESC">Z-A</option>

//         <div className=" pl-[30px] ml-[12px] ">
//           <FiChevronDown className="w-[20px] h-[20px] text-[#4E4B66]" />
//         </div>
//       </select>
//       <div>
//         <input className="form-input pl-5 py-[5px] border-2 box-border rounded-[12px] text-[#4E4B66] focus:outline-none" type="text" placeholder="Search Movie Name..." />
//       </div>
//     </div>
//   );
// };

// export default Search;
