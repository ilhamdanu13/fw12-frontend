import { createSlice } from "@reduxjs/toolkit";

import { transactionAction } from "../actions/transaction";

const initialState = {
  movieId: "",
  cinemaId: "",
  bookingDate: "",
  bookingTime: "",
  seatNumber: [],
  fullName: "",
  email: "",
  phoneNumber: "",
  userId: "",
  paymentMethodId: "",
};
const transactionReducer = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    chooseMovie: (state, { payload }) => {
      console.log(payload);
      state.movieId = payload.movieId;
      state.cinemaId = payload.cinemaId;
      state.bookingDate = payload.bookingDate;
      state.bookingTime = payload.bookingTime;
    },
    chooseSeat: (state, { payload }) => {
      state.seatNumber = payload.seatNumber;
    },
    // choosePayment: (state, action) => {
    //   const { paymentMethodId, fullName, email, phoneNumber, cb } = action.payload;
    //   cb();
    //   return (state = {
    //     ...state,
    //     ...{ paymentMethodId, fullName, email, phoneNumber },
    //   });
    // },
  },
  // extraReducers: (build) => {
  //   build.addCase(transactionAction.fulfilled, (state, action) => {
  //     state = {
  //       ...state,
  //       ...action.payload,
  //     };
  //   });
  // },
});

export const {
  chooseMovie,
  chooseSeat,
  // choosePayment
} = transactionReducer.actions;

export default transactionReducer.reducer;
