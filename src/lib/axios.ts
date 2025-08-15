import axios from "axios";

// normally, we use env variables here
export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

