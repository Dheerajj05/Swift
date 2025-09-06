import axios from 'axios';
import type { AxiosInstance } from 'axios';

const baseURL: string = import.meta.env.VITE_BASE_URL || 'https://dummyjson.com';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
