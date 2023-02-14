import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Signin from './Signin';
import Index from './Index';
import Signup from './Signup';
import Forgot from './Forgot';
import Reset from './Reset';
import Homepage from './Homepage';
import Viewall from './Viewall';
import Moviedetails from './Moviedetails';
import OrderPage from './Orderpage';
import PaymentPage from './Paymentpage';
import ProfilePage from './Profile';
import OrderHistory from './Orderhistory';
import TicketResult from './Ticketresult';
import TicketResult2 from './Ticketresult2';
import TicketResult3 from './Ticketresult3';
import ManageMovie from './Managemovie';
import Dashboard from './Dashboard';
import ManageSchedule from './Manageschedule';

import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={(
            <PublicRoute>
              <Signup />
            </PublicRoute>
          )}
        />
        {/* <Route
          path="/signin"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        /> */}
        <Route path="/signin" element={<Signin />} />

        <Route
          path="/reset"
          element={(
            <PublicRoute>
              <Reset />
            </PublicRoute>
          )}
        />
        <Route
          path="/forgot"
          element={(
            <PublicRoute>
              <Forgot />
            </PublicRoute>
          )}
        />
        <Route
          path="/"
          element={(
            <PublicRoute>
              <Index />
            </PublicRoute>
          )}
        />
        <Route
          path="/homepage"
          element={(
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          )}
        />

        <Route
          path="/all"
          element={(
            <PrivateRoute>
              <Viewall />
            </PrivateRoute>
          )}
        />
        <Route
          path="/moviedetails/:id"
          element={(
            <PrivateRoute>
              <Moviedetails />
            </PrivateRoute>
          )}
        />

        <Route
          path="/orderpage"
          element={(
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          )}
        />

        <Route
          path="/paymentpage"
          element={(
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          )}
        />

        <Route
          path="/profile"
          element={(
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          )}
        />
        <Route
          path="/profile"
          element={(
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          )}
        />
        <Route
          path="/order history"
          element={(
            <PrivateRoute>
              <OrderHistory />
            </PrivateRoute>
          )}
        />

        <Route
          path="/ticket result/:id"
          element={(
            <PrivateRoute>
              <TicketResult />
            </PrivateRoute>
          )}
        />
        <Route
          path="/ticket result 2"
          element={(
            <PrivateRoute>
              <TicketResult2 />
            </PrivateRoute>
          )}
        />

        <Route
          path="/ticket result 3"
          element={(
            <PrivateRoute>
              <TicketResult3 />
            </PrivateRoute>
          )}
        />

        <Route
          path="/manage movie page"
          element={(
            <PrivateRoute>
              <ManageMovie />
            </PrivateRoute>
          )}
        />
        <Route
          path="/dashboard page"
          element={(
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          )}
        />

        <Route
          path="/manage schedule page"
          element={(
            <PrivateRoute>
              <ManageSchedule />
            </PrivateRoute>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
