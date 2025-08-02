import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
