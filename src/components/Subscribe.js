import React from "react";

const Subscribe = () => {
  return (
    <div className="px-[136px] pt-[138px] mb-[96px]">
      <div className="shadow-xl pb-[48px]">
        <div className="flex flex-col text-center pt-[48px] mb-[48px]">
          <div className="text-[24px] text-[#4E4B66]">Be the vanguard of the</div>
          <div className="text-[48px] text-[#f1554c]">Moviegoers</div>
        </div>
        <div className="flex flex-row justify-center mb-[48px]">
          <input type="email" placeholder="Type your email" className="pl-[24px] pr-[100px] mr-[16px] border-2 rounded-[4px] focus:outline-none" />
          <button className="rounded-[4px] bg-[#f1554c] px-[30px] py-[17px] text-white text-sm hover:shadow-xl font-bold">Join now</button>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-[14px] text-[#6E7191] leading-[24px] tracking-[.75px]">By joining you as a Tickitz member,</div>
          <div className="text-[14px] text-[#6E7191]">we will always send you the latest updates via email .</div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
