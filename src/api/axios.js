import axios from 'axios';
import { getLocalItem } from 'storage/localStorage';
import { STORAGE } from 'storage/localStorageEnum';
export const baseURL = process.env.REACT_APP_API_BASE_URL;

const Api = axios.create({
  baseURL,
});

Api.interceptors.request.use((req) => {
  const LOGIN_USER_ACCESS_TOKEN = getLocalItem(STORAGE.TOKEN);
  if (LOGIN_USER_ACCESS_TOKEN) {
    req.headers.Authorization = `Bearer ${LOGIN_USER_ACCESS_TOKEN}`;
  }
  return req;
});

Api.defaults.headers.post['Content-Type'] = 'application/json';

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // logic here
      localStorage.clear();
      window.location.href = '/';
    }
    if (error.response && error.response.status === 403) {
      // window.location.href = '/401';
    }
    return Promise.reject(error);
  }
);

export default Api;
