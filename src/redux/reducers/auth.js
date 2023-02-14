/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { loginAction } from '../actions/auth';

const initialState = {
  token: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (build) => {
    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.token = payload;
    });
  },
});

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;
