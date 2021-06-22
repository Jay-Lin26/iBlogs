import axios from "axios";
import Vue from "vue";

const service = axios.create({
  baseURL: "http://139.224.63.20:3000/",
  // baseURL: "http://127.0.0.1:5000/api/v1.0/",
  headers: { Version: "1.0.1" },
  timeout: 10000,
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
