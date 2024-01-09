import axios from 'axios';
import { refreshToken } from "../api/auth";
export * as httpUtils from "./httpUtils"

export const http = axios.create({
    baseURL: 'http://localhost:5000/api'
});

http.interceptors.request.use(
  (config) => {
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

let isRefreshing = false;

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;
      originalRequest._retry = false;

      if (!isRefreshing) {
          isRefreshing = true;
          try {
            const response = await refreshToken();
            console.log(response);
            localStorage.setItem("access-token",JSON.stringify(response.data.accessToken))
            localStorage.setItem("refresh-token",JSON.stringify(response.data.refreshToken))

            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
            return axios(originalRequest);
          } catch (refreshError) {
            console.log('refreshError', refreshError);
            throw refreshError;
          } finally {
            isRefreshing = false;
          }
      }
      return Promise.reject(error);
    }
  }
);
