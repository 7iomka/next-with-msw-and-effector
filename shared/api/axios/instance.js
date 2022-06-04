import axios from 'axios';

export const initialAxiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
};

if (!initialAxiosConfig.baseURL) {
  console.warn('Missing baseURL in axios config.');
}

export const axiosInstance = axios.create(initialAxiosConfig);
