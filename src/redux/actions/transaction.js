/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const transactionAction = createAsyncThunk('transaction/doTransaction', async ({ token, ...payload }) => {
  const { data } = await http(token).post('https://fw12-backend-shr6.vercel.app/transactions/orderTransaction', { ...payload });
  return data.results;
});
