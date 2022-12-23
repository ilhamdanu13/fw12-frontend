import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk("auth/loginAsync", async ({ email, password, cb }) => {
  const { data } = await axios.post("http://localhost:8888/auth/login", { email, password });
  cb();
  return data.results.token;
});
