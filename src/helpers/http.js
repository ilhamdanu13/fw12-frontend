import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  const instance = axios.create({
    baseURL: process.env.DATA_BACKEND,
    headers,
    keepAlive: true,
  });
  return instance;
};

export default http;
