import axios, { HttpStatusCode } from "axios";

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

const {
  Ok,
  Created,
  Accepted,
  //
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  TooManyRequests,
  //
  InternalServerError,
} = HttpStatusCode;

export const httpMessages = {
  success: {
    [Ok]: "درخواست موفقیت آمیز بود.",
    [Created]: "عملیات با موفقیت انجام شد.",
    [Accepted]: "درخواست انجام شد.",
  },
  error: {
    client: {
      [BadRequest]: "مقادیر نامعتبر می باشند.",
      [Unauthorized]: "احراز هویت ناموفق بود.",
      [Forbidden]: "دسترسی غیر مجاز.",
      [NotFound]: "پیدا نشد.",
      [TooManyRequests]: "درخواست های بیش از حد مجاز.",
    },
    server: {
      [InternalServerError]: "خطای سرور.",
    },
    network: {
      ["ERR_NETWORK"]: "خطای قطعی اینترنت.",
    },
  },
};

export default api;
