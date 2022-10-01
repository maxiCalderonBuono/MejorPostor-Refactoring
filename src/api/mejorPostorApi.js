import axios from "axios";

const mejorPostorApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

mejorPostorApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default mejorPostorApi;
