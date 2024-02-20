import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
});

export const setHeader = (key, value) => {
  api.defaults.headers[key] = value;
};

export const removeHeader = (key) => {
  delete api.defaults.headers[key];
};

export default api;
