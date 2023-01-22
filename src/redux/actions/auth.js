import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../helpers/http";

export const loginAction = createAsyncThunk("auth/login", async ({ email, password, cb }) => {
  try {
    const { data } = await axios.post("http://localhost:8888/auth/login", { email, password });
    cb();
    return data.results.token;
  } catch (error) {
    return error.response.data.message;
  }
});

export const registerAction = createAsyncThunk("auth/register", async ({ firstName, lastName, email, phoneNumber, password, cb }) => {
  try {
    const { data } = await http().post("http://localhost:8888/auth/register", {
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
    const { data } = await http().post("http://localhost:8888/auth/forgotPassword", {
      email,
    });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});

export const resetPassword = createAsyncThunk("auth/resetPassword", async ({ code, password, confirmPassword, cb }) => {
  try {
    const { data } = await http().post("http://localhost:8888/auth/resetPassword", {
      code,
      password,
      confirmPassword,
    });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});
