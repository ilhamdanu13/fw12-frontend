/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { chooseSeat as chooseSeatAction } from '../redux/reducers/transaction';
import NavbarUser from '../components/NavbarUser';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = React.useState([]);
  const movieName = useSelector((state) => state.transaction.movieName);
  const bookingDate = useSelector((state) => state.transaction.bookingDate);
  const bookingTime = useSelector((state) => state.transaction.bookingTime);
  const price = useSelector((state) => state.transaction.price);
  const cinema = useSelector((state) => state.transaction.cinema);
  const cinemaPicture = useSelector((state) => state.transaction.cinemaPicture);
  const [alertSeat, setAlertSeat] = React.useState(false);

  const duration = bookingTime;
  const hour = String(duration).split(':').slice(0, 1).join(':');
  const minute = String(duration).split(':')[1];

  const NewDate = new Date(bookingDate).toDateString();
  const month = NewDate.split(' ')[1];
  const dates = NewDate.split(' ')[2];
  const year = NewDate.split(' ')[3];

  const selectSeat = (seat) => {
    if (selectedSeat.includes(seat)) {
      setSelectedSeat([...selectedSeat.filter((existing) => existing !== seat)]);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
    }
  };

  const checkout = () => {
    if (!selectedSeat.length) {
      setAlertSeat(true);
      return;
    }
    dispatch(chooseSeatAction({ seatNumber: selectedSeat.join(', '), totalPrice: selectedSeat.length * price }));
    navigate('/paymentpage');
  };

  return (
    <div>
      <NavbarUser />
      <div className="lg:flex bg-[#F5F6F8] ">
        <div className="py-5 lg:py-[78px] pl-3 lg:pl-[70px] pr-3 lg:pr-[24px] lg:w-[850px]">
          <div className="mb-[24px]">
            <div className="text-[18px] lg:text-[24px] font-bold">Movie Selected</div>
          </div>
          <div className="border-1 bg-white rounded-[8px]">
            <div className="flex py-[15px] lg:py-[37px] px-3 lg:px-[48px]">
              <div className="text-[24px] font-semibold tracking-[.25px] leading-[30px] flex-1">{movieName}</div>
              <button type="submit" onClick={() => navigate('/all')} className="border-1 rounded-[8px] text-[14px] bg-[#F5F6F8] text-[#f1554c] font-bold py-[5px] px-[10px]">
                Change movie
              </button>
            </div>
          </div>
          <div>
            <div className="pt-[48px] mb-[24px]">
              <div className="text-[18px] lg:text-[24px] font-bold">Choose Your Seat</div>
            </div>
            <div className="border-1 bg-white rounded-[8px] mb-5">
              <div className="text-center pt-3 lg:pt-[106px] pl-3 lg:pl-[90px] pr-3 lg:pr-[65px] mb-[24px]">
                <div className="text-[14px] font-semibold mb-[8px]">Screen</div>
                <hr className="border-2 rounded-[4px] " />
              </div>
              <div className="grid grid-cols-2 gap-2 lg:gap-11 lg:ml-[50px]">
                <div className="grid grid-rows-8 gap-1 font-Mulish font-semibold">
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', ''].map((alphabet, _i) => (
                    <div className="grid grid-cols-8">
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((index, _i) => {
                        if (index > 0) {
                          if (alphabet !== '') {
                            const seatNumber = alphabet + String(index);
                            return <button type="submit" onClick={() => selectSeat(seatNumber)} className={`w-5 h-5 bg-[#D6D8E7] hover:bg-[#5F2EEA] rounded ${selectedSeat.includes(seatNumber) ? 'bg-violet-700' : ''}`} />;
                          }
                          return <button type="submit" className="w-5 h-5">{index}</button>;
                        }
                        return <button type="submit" className="w-5 h-5 ">{alphabet}</button>;
                      })}
                    </div>
                  ))}
                </div>
                <div className="grid grid-rows-8 gap-1 font-Mulish font-semibold">
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', ''].map((alphabet, _i) => (
                    <div className="grid grid-cols-8">
                      {[8, 9, 10, 11, 12, 13, 14].map((index, _i) => {
                        if (index > 0) {
                          if (alphabet !== '') {
                            const seatNumber = alphabet + String(index);
                            return <button type="submit" onClick={() => selectSeat(seatNumber)} className={`w-5 h-5 bg-[#D6D8E7] hover:bg-[#5F2EEA] rounded ${selectedSeat.includes(seatNumber) ? 'bg-violet-700' : ''}`} />;
                          }
                          return <button type="submit" className="w-5 h-5 ">{index}</button>;
                        }
                        return <button type="submit" className="w-5 h-5 ">{alphabet}</button>;
                      })}
                    </div>
                  ))}
                </div>
                <div />
              </div>

              <div className="pl-3 lg:pl-[87px] pb-3 lg:pb-[106px] pt-3 lg:pt-0">
                <div className="mb-3 lg:mb-[41px]">
                  <div className="font-Mulish font-semibold">Seating key</div>
                </div>
                <div className="lg:flex">
                  <div className="flex mr-[40px] mb-3 lg:mb-0">
                    <div className="border-[13px] rounded-[4px] border-[#D6D8E7] mr-[16px]" />
                    <div>Available</div>
                  </div>
                  <div className="flex mr-[40px] mb-3 lg:mb-0">
                    <div className="border-[13px] rounded-[4px] border-[#5F2EEA] mr-[16px]" />
                    <div>Selected</div>
                  </div>
                  <div className="flex mr-[40px] mb-3 lg:mb-0">
                    <div className="border-[13px] rounded-[4px] border-[#0b2361] mr-[16px]" />
                    <div className="">Sold</div>
                  </div>
                </div>
              </div>
            </div>
            {alertSeat ? (
              <div className="alert alert-warning shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Please choose seat!</span>
                </div>
              </div>
            ) : (
              false
            )}
            <div className="flex pt-5 lg:pt-[40px]">
              <div className="flex-1">
                <button type="submit" onClick={() => navigate('/all')} className="border-2 border-[#f1554c] text-[#f1554c] px-1 lg:px-[75px] py-3 lg:py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Change your movie
                </button>
              </div>
              <div>
                <button type="submit" onClick={checkout} className="border-2 border-[#f1554c] text-[#f1554c] px-1 lg:px-[75px] py-3 lg:py-[10px] rounded-[4px] hover:bg-[#f1554c] hover:text-white duration-300 hover:shadow-md">
                  Checkout now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 lg:py-[85px] lg:w-[410px] px-3 lg:px-0">
          <div>
            <div className="text-[24px] font-bold leading-[30px] tracking-[.25px] mb-[24px]">Order Info</div>
          </div>
          <div className="border-1 bg-white rounded-[8px]">
            <div className="text-center pt-[32px] lg:px-[77px] flex flex-col justify-center items-center lg:block">
              <div className="mb-[13px] lg:pl-[70px]">
                <img className="" src={cinemaPicture} alt="Cineone" />
              </div>
              <div className="mb-[24px]">
                <div className="font-semibold text-[24px]">{cinema}</div>
              </div>
            </div>
            <div className="flex px-[24px] mb-[16px]">
              <div className="flex-1 text-[#6B6B6B] text-[14px] font-Mulish">Movie selected</div>
              <div className="text-[#14142B] text-[14px] font-Mulish font-semibold">{movieName}</div>
            </div>
            <div className="flex px-[24px] mb-[16px]">
              <div className="flex-1 text-[#6B6B6B] text-[14px] font-Mulish">
                {month}
                {' '}
                {dates}
                ,
                {' '}
                {year}
              </div>
              <div className="text-[#14142B] text-[14px] font-Mulish font-semibold">
                {hour}
                :
                {minute}
              </div>
            </div>
            <div className="flex px-[24px] mb-[16px]">
              <div className="flex-1 text-[#6B6B6B] text-[14px] font-Mulish">One ticket price</div>
              <div className="text-[#14142B] text-[14px font-Mulish font-semibold">{price}</div>
            </div>
            <div className="flex px-[24px] mb-[40px]">
              <div className="flex-1 text-[#6B6B6B] text-[14px] font-Mulish">Seat choosed</div>
              <div className="text-[#14142B] text-[14px] font-Mulish font-semibold">{selectedSeat.join(', ')}</div>
            </div>
            <hr className="mb-[24px] " />
            <div className="flex px-[24px] pb-[24px] items-center justify-center ">
              <div className="flex-1 font-semibold text-[18px] font-Mulish">Total Payment</div>
              <div className="text-[#5F2EEA] text-[18px] font-semibold">
                IDR.
                {selectedSeat.length * price}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
}

export default OrderPage;
