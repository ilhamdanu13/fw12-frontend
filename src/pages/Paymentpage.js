import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { transactionAction as trxAction } from "../redux/actions/transaction";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const PaymentPage = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.transaction);
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    paymentMethodId: "",
  });
  const [paymentList, setPaymentList] = React.useState([]);
  React.useEffect(() => {
    getPaymentMethod();
  }, []);

  React.useEffect(() => {
    console.log(form);
  }, [form]);

  const getPaymentMethod = async () => {
    const { data } = await axios.get("http://localhost:8888/paymentMethod");
    setPaymentList(data.results);
  };

  const pay = () => {
    dispatch(trxAction({ ...form }));
  };
  return (
    <div>
      <NavbarUser />
      <div className="flex bg-[#F5F6F8] ">
        <div className="py-[78px] pl-[70px] pr-[24px] w-[850px]">
          <div className="mb-[24px]">
            <div className="text-[24px] font-bold">Payment Info</div>
          </div>
          <div className="border-1 bg-white rounded-[8px]">
            <div className="py-[37px] px-[48px]">
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Date & time</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">Tuesday, 07 July 2020 at 02:00 </div>
              </div>
              <hr className="mb-[24px]" />
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Movie title</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">Spider-Man: Homecoming </div>
              </div>
              <hr className="mb-[24px]" />
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Cinema name</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">CineOne21 Cinema </div>
              </div>
              <hr className="mb-[24px]" />
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Number of tickets</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">3 pieces </div>
              </div>
              <hr className="mb-[24px]" />
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Total payment</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">$30,00 </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-[48px] mb-[24px]">
              <div className="text-[24px] font-bold">Choose a Payment Method</div>
            </div>
            <div className="border-1 bg-white rounded-[8px]">
              <div className="grid grid-cols-4 gap-5">
                {paymentList.map((item) => (
                  <div>
                    <button onClick={() => setForm({ ...form, paymentMethodId: item.id })} className={`border-2  w-32 h-11 flex justify-center items-center font-bold ${form.paymentMethodId === item.id ? "bg-violet-700" : ""}`}>
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center mb-[37px]">
                <hr className="w-[280px]" />
                <div className="px-[40px]">or</div>
                <hr className="w-[280px]" />
              </div>
              <div className=" flex justify-center items-center pb-[56px]">
                <div className="text-[16px] text-[#6E7191] justify-center items-center">
                  Pay via cash. <Link className="text-[#f1554c]">See how it work</Link>
                </div>
              </div>
            </div>
            <div className="flex pt-[40px]">
              <div className="flex-1">
                <button type="submit" className="border-2 border-[#f1554c] text-[#f1554c] px-[75px] py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Previous step
                </button>
              </div>
              <div>
                <button onClick={pay} type="submit" className="border-2 border-[#f1554c] text-[#f1554c] px-[75px] py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Pay your order
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[85px] w-[410px]">
          <div>
            <div className="text-[24px] font-bold leading-[30px] tracking-[.25px] mb-[24px]">Personal Info</div>
          </div>
          <div className="border-1 bg-white rounded-[8px]">
            <form className="px-[40px] py-[48px]">
              <div className="mb-[31px]">
                <label className="text-[#696F79] text-[16px]">Full Name</label>
                <input
                  onChange={(e) => setForm({ ...form, [e.target.fullName]: e.target.value })}
                  className="block text-[#4E4B66] text-[18px] border-2 w-full pl-[32px] py-[8px] rounded-[4px] mt-[14px] focus:outline-none"
                  type="fullName"
                  name="fullName"
                  placeholder="Write your full name"
                />
              </div>
              <div className="mb-[31px]">
                <label className="text-[#696F79] text-[16px]">Email</label>
                <input
                  onChange={(e) => setForm({ ...form, [e.target.email]: e.target.value })}
                  className="block text-[#4E4B66] text-[18px] border-2 w-full pl-[32px] py-[8px] rounded-[4px] mt-[14px] focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Write your email"
                />
              </div>
              <div className="mb-[31px]">
                <label className="text-[#696F79] text-[16px]">Phone Number</label>
                <input
                  onChange={(e) => setForm({ ...form, [e.target.phoneNumber]: e.target.value })}
                  className="block text-[#4E4B66] text-[18px] border-2 w-full pl-[32px] py-[8px] rounded-[4px] mt-[14px] focus:outline-none"
                  type="phoneNumber"
                  name="phoneNumber"
                  placeholder="+62 000000"
                />
              </div>
              <div className="flex block text-[#4E4B66] text-[18px] border-1 w-full pl-[32px] py-[8px] rounded-[4px] mt-[14px] bg-[#F4B7404D]">
                <img className="mr-[24px]" src={require("../assets/images/caution.png")} alt="caution" />
                <span className="text-[16px]">Fill your data correctly.</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default PaymentPage;
