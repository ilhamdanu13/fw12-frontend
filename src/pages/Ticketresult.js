/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import NavbarUser from '../components/NavbarUser';
import http from '../helpers/http';

const TicketResult = () => {
  const token = useSelector((state) => state?.auth?.token);
  const { id } = useParams();
  const [ticket, setTicket] = React.useState({});

  const getTicket = async () => {
    const { data } = await http(token).get(`https://fw12-backend-shr6.vercel.app/transactions/ticket/${id}`);
    setTicket(data.results);
  };

  React.useEffect(() => {
    getTicket();
  }, []);

  return (
    <div>
      <NavbarUser />
      <div className="lg:flex bg-[#F5F6F8] lg:px-[195px] ">
        <div className="pt-[72px] pb-[96px] w-full">
          <div className="bg-white">
            <div className="mb-[48px] pt-[56px] flex justify-center items-center">
              <div className="text-[24px] font-bold">Proof of Payment</div>
            </div>
            {/* Ticket */}
            <div className="px-3 lg:px-[72px] lg:flex ">
              <div className=" w-full pb-[145px]">
                <div className="bg-[#f1554c] px-3 lg:px-[56px] rounded-t-2xl py-[20px] lg:py-0">
                  <div className="flex justify-center items-center">
                    <div className=" relative flex-1">
                      <span className="text-[20px] lg:text-[50px] text-white font-Rubik">Cluezzy</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      <span className="text-white font-Mulish font-semibold text-[16px] lg:text-[18px]">Admit One</span>
                    </div>
                    <div className="hidden lg:block ">
                      <span className="text-[50px] text-white font-Rubik">Cluezzy</span>
                    </div>
                  </div>
                </div>
                <div className="pt-5 lg:pt-[32px] pb-5 lg:pb-[43px] pl-3 lg:pl-[56px]  border-l-2 border-b-2 border-r-2 rounded-b-2xl">
                  <div className="lg:hidden flex justify-center items-center">
                    <img src={require('../assets/images/QR Code.png')} alt="threemovies" />
                  </div>
                  <div className="mb-3 lg:mb-0">
                    <div className="font-Mulish text-[#AAAAAA] text-[12px] mb-1">Movie</div>
                    <div className="font-Mulish font-semibold">{ticket.title}</div>
                  </div>
                  <div className="lg:flex items-center lg:relative">
                    <div className="flex-1 lg:w-3/5 lg:pr-[50px] ">
                      <div className="lg:flex mb-[16px]">
                        <div className="flex-1 mb-3 lg:mb-0">
                          <div className="font-Mulish text-[#AAAAAA] text-[12px] mb-1">Date</div>
                          <div className="font-Mulish font-semibold">{moment(ticket.bookingDate).add(-2, 'day').format('0d, MMM')}</div>
                        </div>
                        <div className="flex-1 w-[50px] mb-3 lg:mb-0">
                          <div className="font-Mulish text-[#AAAAAA] text-[12px] mb-1">Time</div>
                          <div className="font-Mulish font-semibold">{String(ticket.bookingTime).split(':').slice(0, 2).join(':')}</div>
                        </div>
                        <div className="lg:w-[50px] mb-3 lg:mb-0">
                          <div className="font-Mulish text-[#AAAAAA] text-[12px] mb-1">Category</div>
                          <div className="font-Mulish font-semibold">{ticket.genre}</div>
                        </div>
                      </div>
                      <div className="lg:flex">
                        <div className="flex-1 w-[50px] mb-3 lg:mb-0">
                          <div className="font-Mulish text-[#AAAAAA] text-[12px] mb-1">Count</div>
                          <div className="font-Mulish font-semibold flex">{Math.round(ticket?.seatNum?.length / 3)}</div>
                        </div>
                        <div className="flex-1 lg:w-[50px] mb-3 lg:mb-0">
                          <div className="font-Mulish text-[#AAAAAA] text-[12px] mb-1">Seats</div>
                          <div className="font-Mulish font-semibold">{ticket.seatNum}</div>
                        </div>
                        <div className="w-[50px]">
                          <div className="font-Mulish text-[#AAAAAA] text-[12px] mb-1">Price</div>
                          <div className="font-Mulish font-semibold">
                            IDR.
                            {ticket.totalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:block absolute top-[-175px] right-64">
                      <div className="bg-white w-[45px] h-[45px] rounded-[50%] " />
                      <div className="border-dashed border-r-4 h-[340px] w-2 ml-[15px]" />
                      <div className="bg-white w-[45px] h-[45px] rounded-[50%] border-t-2" />
                    </div>
                    <div className="hidden lg:flex justify-center items-center w-2/5">
                      <img src={require('../assets/images/QR Code.png')} alt="threemovies" />
                    </div>
                  </div>
                </div>
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

export default TicketResult;
