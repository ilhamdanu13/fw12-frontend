import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../helpers/http";

export const loginAction = createAsyncThunk("auth/login", async ({ email, password, cb }) => {
  try {
    const { data } = await http().post("https://fw12-backend-shr6.vercel.app/auth/login", { email, password });
    cb();
    return data.results.token;
  } catch (error) {
    return error.response.data.message;
  }
});

export const registerAction = createAsyncThunk("auth/register", async ({ firstName, lastName, email, phoneNumber, password, cb }) => {
  try {
    const { data } = await http().post("https://fw12-backend-shr6.vercel.app/auth/register", {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});

export const forgotPassword = createAsyncThunk("auth/forgotPassword", async ({ email, cb }) => {
  try {
    const { data } = await http().post("https://fw12-backend-shr6.vercel.app/auth/forgotPassword", {
      email,
    });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});

export const resetPassword = createAsyncThunk("auth/resetPassword", async ({ code, email, password, confirmPassword, cb }) => {
  try {
    const { data } = await http().post("https://fw12-backend-shr6.vercel.app/auth/resetPassword", {
      code,
      email,
      password,
      confirmPassword,
    });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});
