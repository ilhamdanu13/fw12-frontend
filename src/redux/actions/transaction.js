import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const transactionAction = createAsyncThunk("transaction/doTransaction", async ({ token, ...payload }) => {
  const { data } = await http(token).post("/transactions/orderTransaction", { ...payload });
  return data.results;
});
