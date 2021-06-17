import axios from "axios";

const service = axios.create({
  baseURL: "http://139.224.63.20:3000/",
  headers: { Version: "1.0.1" },
  timeout: 5000,
});
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
