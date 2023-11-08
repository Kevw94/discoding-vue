import axios from 'axios';

export const http = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
});