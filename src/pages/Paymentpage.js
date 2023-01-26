import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Moment from "moment";
import { transactionAction as trxAction } from "../redux/actions/transaction";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const PaymentPage = () => {
  const token = useSelector((state) => state?.auth?.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataTransaction = useSelector((state) => state.transaction);
  const movieId = useSelector((state) => state.transaction.movieId);
  const bookingDate = useSelector((state) => state.transaction.bookingDate);
  const bookingTime = useSelector((state) => state.transaction.bookingTime);
  const seatNum = useSelector((state) => state.transaction.seatNum);
  const price = useSelector((state) => state.transaction.price);
  const cinema = useSelector((state) => state.transaction.cinema);
  const movieName = useSelector((state) => state.transaction.movieName);
  const totalPrice = useSelector((state) => state.transaction.totalPrice);

  let duration = bookingTime;
  let hour = String(duration).split(":").slice(0, 1).join(":");
  let minute = String(duration).split(":")[1];

  let NewDate = new Date(bookingDate).toDateString();
  let month = NewDate.split(" ")[1];
  let dates = NewDate.split(" ")[2];
  let year = NewDate.split(" ")[3];

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
    const { data } = await axios.get("https://fw12-backend-red.vercel.app/paymentMethod");
    setPaymentList(data.results);
  };

  const pay = () => {
    dispatch(trxAction({ ...dataTransaction, ...form, token }));
  };

  const redirect = () => {
    setTimeout(() => {
      navigate("/order history");
    }, 3000);
  };
  console.log(paymentList);
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
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">
                  {month} {dates}, {year} at {hour}:{minute}{" "}
                </div>
              </div>
              <hr className="mb-[24px]" />
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Movie title</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">{movieName} </div>
              </div>
              <hr className="mb-[24px]" />
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Cinema name</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">{cinema}</div>
              </div>
              <hr className="mb-[24px]" />
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Number of tickets</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">{seatNum} </div>
              </div>
              <hr className="mb-[24px]" />
              <div className="flex mb-[24px]">
                <div className="text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 ">Total payment</div>
                <div className="text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">IDR {totalPrice} </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-[48px] mb-[24px]">
              <div className="text-[24px] font-bold">Choose a Payment Method</div>
            </div>
            <div className="border-1 bg-white rounded-[8px]">
              <div className="grid grid-cols-4 gap-5 pl-[35px] pt-[30px] mb-[20px]">
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
                {/* <button onClick={pay} type="submit" className="border-2 border-[#f1554c] text-[#f1554c] px-[75px] py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Pay your order
                </button> */}
              </div>
              {/* The button to open modal */}
              <label htmlFor="my-modal-6" className="border-2 border-[#f1554c] text-[#f1554c] px-[75px] py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md" onClick={pay}>
                Pay your order
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Congratulations order ticket succeed!</h3>
                  <p className="py-4">While we prepare your seat, please check other movies</p>
                  <div className="modal-action">
                    <label htmlFor="my-modal-6" className="bg-[#f1554c] px-[20px] py-[10px] text-white font-[500] font-Mulish rounded-[10px]" onClick={redirect}>
                      Yay!
                    </label>
                  </div>
                </div>
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
                  onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                  className="block text-[#4E4B66] text-[18px] border-2 w-full pl-[32px] py-[8px] rounded-[4px] mt-[14px] focus:outline-none"
                  name="fullName"
                  placeholder="Write your full name"
                />
              </div>
              <div className="mb-[31px]">
                <label className="text-[#696F79] text-[16px]">Email</label>
                <input
                  onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                  className="block text-[#4E4B66] text-[18px] border-2 w-full pl-[32px] py-[8px] rounded-[4px] mt-[14px] focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Write your email"
                />
              </div>
              <div className="mb-[31px]">
                <label className="text-[#696F79] text-[16px]">Phone Number</label>
                <input
                  onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                  className="block text-[#4E4B66] text-[18px] border-2 w-full pl-[32px] py-[8px] rounded-[4px] mt-[14px] focus:outline-none"
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
