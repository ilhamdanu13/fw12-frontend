import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const transactionAction = createAsyncThunk("transaction/doTransaction", async ({ payload }) => {
  const { data } = await axios.post("/transactions", { ...payload });
  return data.results;
});
