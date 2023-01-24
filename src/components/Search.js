import React from "react";
import { FiChevronDown } from "react-icons/fi";
const Search = () => {
  return (
    <div className="flex mb-[40px] pt-[57px]">
      <div className="flex-1 text-[24px] font-bold font-Mulish">List Movie</div>
      <div className="flex pr-[10px] pl-[10px] py-[5px] border-2 box-border rounded-[12px] items-center mr-[12px] bg-white">
        <div className="">
          <select>
            <option>Genre</option>
            <option>Title</option>
          </select>
        </div>
        <div className=" pl-[30px] ml-[12px] ">
          <FiChevronDown className="w-[20px] h-[20px] text-[#4E4B66]" />
        </div>
      </div>
      <div>
        <input className="form-input pl-5 py-[5px] border-2 box-border rounded-[12px] text-[#4E4B66] focus:outline-none" type="text" placeholder="Search Movie Name..." />
      </div>
    </div>
  );
};

export default Search;
