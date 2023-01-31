import { createSlice } from "@reduxjs/toolkit";

import { transactionAction } from "../actions/transaction";

const initialState = {
  userId: "",
  movieId: "",
  movieName: "",
  cinema: "",
  cinemaPicture: "",
  bookingDate: "",
  bookingTime: "",
  price: "",
  seatNum: [],
  fullName: "",
  email: "",
  phoneNumber: "",
  paymentMethodId: "",
  totalPrice: "",
  genre: "",
};
const transactionReducer = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    chooseMovie: (state, { payload }) => {
      console.log(payload);
      state.userId = payload.userId;
      state.movieId = payload.movieId;
      state.cinemaPicture = payload.cinemaPicture;
      state.cinema = payload.cinemaId;
      state.price = payload.price;
      state.bookingDate = payload.bookingDate;
      state.bookingTime = payload.bookingTime;
      state.movieName = payload.movieName;
      state.genre = payload.genre;
    },
    chooseSeat: (state, { payload }) => {
      state.seatNum = payload.seatNumber;
      state.totalPrice = payload.totalPrice;
    },
    choosePayment: (state, action) => {
      const { paymentMethodId, fullName, email, phoneNumber, cb } = action.payload;
      cb();
      return (state = {
        ...state,
        ...{ paymentMethodId, fullName, email, phoneNumber },
      });
    },
  },

  extraReducers: (build) => {
    build.addCase(transactionAction.fulfilled, (state, action) => {
      state = {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const { chooseMovie, chooseSeat, choosePayment } = transactionReducer.actions;

export default transactionReducer.reducer;
