import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="mr-[8px] cursor-pointer">
        <div className=" w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center text-[18px] font-Mulish hover:bg-[#f1554c] hover:text-white hover:shadow-lg duration-500">1</div>
      </div>
      <div className="mr-[8px] cursor-pointer">
        <div className=" w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center text-[18px] font-Mulish hover:bg-[#f1554c] hover:text-white hover:shadow-lg duration-500">2</div>
      </div>
      <div className="mr-[8px] cursor-pointer">
        <div className=" w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center text-[18px] font-Mulish hover:bg-[#f1554c] hover:text-white hover:shadow-lg duration-500">3</div>
      </div>
      <div className="cursor-pointer">
        <div className=" w-[40px] h-[40px] bg-white rounded-[8px] flex justify-center items-center text-[18px] font-Mulish hover:bg-[#f1554c] hover:text-white hover:shadow-lg duration-500">4</div>
      </div>
    </div>
  );
};

export default Pagination;
