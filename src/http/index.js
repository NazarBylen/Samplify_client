import axios from 'axios';
export * as httpUtils from "./httpUtils"

export const http = axios.create({
    baseURL: 'http://localhost:5000/api'
});
