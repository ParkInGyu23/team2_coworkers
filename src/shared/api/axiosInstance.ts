import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

const NEXT_PUBLIC_API_BASE_URL = `https://fe-project-cowokers.vercel.app`;

const axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    if (token) {config.headers.Authorization = `Bearer ${token.trim()}`;}
  }
  return config;
});

export default axiosInstance;
