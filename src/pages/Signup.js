import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex">
      <div
        className=" w-[800px] h-[1054px] bg-cover bg-center  bg-[url('../images/background.png')]
      max-[425px]:hidden"
      >
        <div className="bg-[#2B156BCC] opacity-80  w-[800px] h-[1054px]">
          <div className="pt-[390px] pl-[150px]">
            <div className="">
              <img src={require("../assets/images/tickitz 1.png")} alt="logo" />
            </div>
            <div className="text-[48px] text-white pl-[50px]">
              <div> wait, watch, wow!</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="basis-2/5 pt-[176px] pr-20 pl-[83px]
      min-[320px]: max-[425px]:text-[80%]"
      >
        <div className=" text-[48px] mb-3 font-[600px]">Sign Up</div>
        <div className="text-[18px] tracking-[.007em] leading-[22px] mb-12 text-[#AAAAAA] font-[400px]">Fill your additional details</div>
        <form>
          <label>First Name</label>
          <div className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 mb-3">
            <input type="email" placeholder="Write your first name" />
          </div>
          <label>Last Name</label>
          <div className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 mb-3">
            <input type="email" placeholder="Write your last name" />
          </div>
          <label>Phone Number</label>
          <div className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 mb-3">
            <input type="email" placeholder="Write your phone number" />
          </div>
          <label>Email</label>
          <div className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 mb-3">
            <input type="email" placeholder="Write your email" />
          </div>
          <label>Password</label>
          <div className="form-input pr-20 pl-5 py-4 border-2 box-border rounded-[12px] mt-3 mb-12">
            <input type="password" placeholder="Write your password" />
          </div>
          <div className="box-border border-2 pr-10 pl-10 py-4 text-center bg-[#5F2EEA] rounded-[12px] mb-[32px]">
            <Link to="/home" className="text-white">
              Sign Up
            </Link>
          </div>
          <div className="text-center">
            <div className="text-[#8692A6] mb-[19px]">
              Already have account ?{" "}
              <Link to="/signin" className="text-blue-700">
                Sign In
              </Link>
            </div>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Signup;
