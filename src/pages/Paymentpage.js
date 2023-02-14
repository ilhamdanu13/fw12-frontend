/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { transactionAction as trxAction } from '../redux/actions/transaction';
import NavbarUser from '../components/NavbarUser';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

function PaymentPage() {
  const token = useSelector((state) => state?.auth?.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataTransaction = useSelector((state) => state.transaction);
  const bookingDate = useSelector((state) => state.transaction.bookingDate);
  const bookingTime = useSelector((state) => state.transaction.bookingTime);
  const seatNum = useSelector((state) => state.transaction.seatNum);
  const cinema = useSelector((state) => state.transaction.cinemaName);
  const movieName = useSelector((state) => state.transaction.movieName);
  const totalPrice = useSelector((state) => state.transaction.totalPrice);
  const [paymentList, setPaymentList] = React.useState([]);
  const [alertPayment, setAlertPayment] = React.useState(false);
  const [alertSuccess, setAlertSuccess] = React.useState(false);
  const [alertForm, setAlertForm] = React.useState(false);

  const duration = bookingTime;
  const hour = String(duration).split(':').slice(0, 1).join(':');
  const minute = String(duration).split(':')[1];

  const NewDate = new Date(bookingDate).toDateString();
  const month = NewDate.split(' ')[1];
  const dates = NewDate.split(' ')[2];
  const year = NewDate.split(' ')[3];

  const [form, setForm] = React.useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    paymentMethodId: '',
  });

  React.useEffect(() => {
    console.log(form);
  }, [form]);

  const getPaymentMethod = async () => {
    const { data } = await axios.get('https://fw12-backend-shr6.vercel.app/paymentMethod');
    setPaymentList(data.results);
  };

  React.useEffect(() => {
    getPaymentMethod();
  }, []);

  const pay = () => {
    if (!form.paymentMethodId) {
      setAlertPayment(true);
      setAlertSuccess(false);
      return;
    }
    if (form.paymentMethodId) {
      setAlertPayment(false);
    }
    if (!form.email) {
      setAlertForm(true);
      return;
    }
    if (!form.fullName) {
      setAlertForm(true);
      return;
    }
    if (!form.phoneNumber) {
      setAlertForm(true);
      return;
    }

    dispatch(trxAction({ ...dataTransaction, ...form, token }));
    setAlertSuccess(true);
    setAlertPayment(false);
    setAlertForm(false);
    setTimeout(() => {
      navigate('/order history');
    }, 3000);
  };

  console.log(paymentList);
  return (
    <div>
      <NavbarUser />
      <div className="lg:flex bg-[#F5F6F8] ">
        <div className="py-5 m:py-[78px] pl-3 lg:pl-[70px] pr-3 lg:pr-[24px] lg:w-[850px]">
          <div className="mb-[24px]">
            <div className="text-[18px] lg:text-[24px] font-bold">Payment Info</div>
          </div>
          <div className="border-1 bg-white rounded-[8px]">
            <div className="py-3 lg:py-[37px] px-3 lg:px-[48px]">
              <div className="lg:flex mb-3 lg:mb-[24px]">
                <div className="text-[18px] lg:text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 mb-1 lg:mb-0">Date & time</div>
                <div className="text-[18px] lg:text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">
                  {month}
                  {' '}
                  {dates}
                  ,
                  {' '}
                  {year}
                  {' '}
                  at
                  {' '}
                  {hour}
                  :
                  {minute}
                  {' '}
                </div>
              </div>
              <hr className="mb-3 lg:mb-[24px]" />
              <div className="lg:flex mb-3 lg:mb-[24px]">
                <div className="text-[18px] lg:text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 mb-1 lg:mb-0 ">Movie title</div>
                <div className="text-[18px] lg:text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">
                  {movieName}
                  {' '}
                </div>
              </div>
              <hr className="mb-3 lg:mb-[24px]" />
              <div className="lg:flex mb-3 lg:mb-[24px]">
                <div className="text-[18px] lg:text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 mb-1 lg:mb-0">Cinema name</div>
                <div className="text-[18px] lg:text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">{cinema}</div>
              </div>
              <hr className="mb-3 lg:mb-[24px]" />
              <div className="lg:flex mb-3 lg:mb-[24px]">
                <div className="text-[18px] lg:text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 mb-1 lg:mb-0">Number of tickets</div>
                <div className="text-[18px] lg:text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">
                  {seatNum}
                  {' '}
                </div>
              </div>
              <hr className="mb-3 lg:mb-[24px]" />
              <div className="lg:flex mb-3 lg:mb-[24px]">
                <div className="text-[18px] lg:text-[20px] text-[#6B6B6B] tracking-[.25px] leading-[25px] flex-1 mb-1 lg:mb-0">Total payment</div>
                <div className="text-[18px] lg:text-[20px] text-[#000000] tracking-[.25px] leading-[25px]">
                  IDR
                  {totalPrice}
                  {' '}

                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-[48px] mb-[24px]">
              <div className="text-[18px] lg:text-[24px] font-bold">Choose a Payment Method</div>
            </div>
            <div className="border-1 bg-white rounded-[8px] mb-5">
              <div className="grid grid-cols-4 gap-5 pl-3 lg:pl-[35px] pt-[30px] mb-[20px]">
                {paymentList.map((item) => (
                  <div>
                    <button
                      type="submit"
                      onClick={() => setForm({ ...form, paymentMethodId: item.id })}
                      className={`border-2 rounded w-15 lg:w-32 h-11 flex justify-center items-center font-bold ${form.paymentMethodId === item.id ? 'bg-amber-300 border-0' : ''}`}
                    >
                      <img src={item.picture} alt={item.name} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center mb-[37px]">
                <hr className="w-[80px] lg:w-[280px]" />
                <div className="px-3 lg:px-[40px]">or</div>
                <hr className="w-[80px] lg:w-[280px]" />
              </div>
              <div className=" flex justify-center items-center pb-[56px]">
                <div className="text-[16px] text-[#6E7191] justify-center items-center">
                  Pay via cash.
                  {' '}
                  <span className="text-[#f1554c]">See how it work</span>
                </div>
              </div>
            </div>
            {alertSuccess ? (
              <div className="alert alert-success shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Your order success!</span>
                </div>
              </div>
            ) : (
              false
            )}

            {alertForm ? (
              <div className="alert alert-warning shadow-lg mb-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Please fill form correctly</span>
                </div>
              </div>
            ) : (
              false
            )}

            {alertPayment ? (
              <div className="alert alert-warning shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Please choose payment</span>
                </div>
              </div>
            ) : (
              false
            )}
            <div className="flex pt-3 lg:pt-[40px]">
              <div className="flex-1">
                <button type="submit" onClick={() => navigate('/orderpage')} className="border-2 border-[#f1554c] text-[#f1554c] px-3 lg:px-[75px] py-3 lg:py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Previous step
                </button>
              </div>
              <div>
                <button onClick={pay} type="submit" className="border-2 border-[#f1554c] text-[#f1554c] px-3 lg:px-[75px] py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Pay your order
                </button>
              </div>
              {/* The button to open modal */}
              {/* <label htmlFor="my-modal-6" className="border-2 border-[#f1554c] text-[#f1554c] px-1 lg:px-[75px] py-3 lg:py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md" onClick={pay}>
                Pay your order
              </label> */}

              {/* Put this part before </body> tag */}
            </div>
          </div>
        </div>
        <div className="px-3 lg:px-0 py-3 lg:py-[85px] lg:w-[410px]">
          <div>
            <div className="text-[24px] font-bold leading-[30px] tracking-[.25px] mb-[24px]">Personal Info</div>
          </div>
          <div className="border-1 bg-white rounded-[8px]">
            <form className="px-3 lg:px-[40px] py-5 lg:py-[48px]">
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
                <img className="mr-[24px]" src={require('../assets/images/caution.png')} alt="caution" />
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
}

export default PaymentPage;
