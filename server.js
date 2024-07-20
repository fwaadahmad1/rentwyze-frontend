import axios from "axios";

export const Server = axios.create({
  baseURL: process.env["NEXT_PUBLIC_BASE_URL"],
  withCredentials: true,
});

Server.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("auth-token");
    if (token) {
      config.headers["auth-token"] = `${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
