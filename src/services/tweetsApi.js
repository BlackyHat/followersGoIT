import axios from 'axios';

export const tweetsApi = axios.create({
  baseURL: 'https://64647014043c103502b97e64.mockapi.io/api/v9/',
});
