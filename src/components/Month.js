import React from 'react';

function Month() {
  return (
    <div className="flex overflow-auto mb-3 md:mb-[68px]">
      {['September', 'October', 'November', 'Desember', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'].map((month) => (
        <button type="submit" key={month} className="border-2 px-[35px] py-[5px] rounded-[4px] border-[#5F2EEA] text-[#f1554c] mr-[16px] mb-[20px] border-[#f1554c] hover:text-white hover:bg-[#f1554c] hover:font-semibold hover:shadow-md duration-300">
          {month}
        </button>
      ))}
    </div>
  );
}

export default Month;
