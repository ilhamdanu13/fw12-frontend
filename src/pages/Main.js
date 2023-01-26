import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Signin from "./Signin";
import Index from "./Index";
import Signup from "./Signup";
import Forgot from "./Forgot";
import Reset from "./Reset";
import Homepage from "./Homepage";
import Viewall from "./Viewall";
import Moviedetails from "./Moviedetails";
import OrderPage from "./Orderpage";
import PaymentPage from "./Paymentpage";
import ProfilePage from "./Profile";
import OrderHistory from "./Orderhistory";
import TicketResult from "./Ticketresult";
import TicketResult2 from "./Ticketresult2";
import TicketResult3 from "./Ticketresult3";
import ManageMovie from "./Managemovie";
import Dashboard from "./Dashboard";
import ManageSchedule from "./Manageschedule";
import Transaction from "./Transaction";

import PrivateRoute from "../components/PrivateRoute";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/all" element={<Viewall />} />
        <Route path="/moviedetails/:id" element={<Moviedetails />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route
          path="/paymentpage"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/order history" element={<OrderHistory />} />
        <Route path="/ticket result" element={<TicketResult />} />
        <Route path="/ticket result 2" element={<TicketResult2 />} />
        <Route path="/ticket result 3" element={<TicketResult3 />} />
        <Route path="/manage movie page" element={<ManageMovie />} />
        <Route path="/dashboard page" element={<Dashboard />} />
        <Route path="/manage schedule page" element={<ManageSchedule />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
