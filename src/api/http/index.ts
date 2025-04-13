import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import cookie from "./cookie";

const API: string = process.env.NEXT_PUBLIC_API_BASE_URL as string;
axios.defaults.baseURL = API;

export const setAuthToken = (token: string | null): void => {
  if (token) {
    axios.defaults.headers.common["x-access-token"] = token;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.baseURL = `${API}`;
  } else {
    delete axios.defaults.headers.common["x-access-token"];
    delete axios.defaults.headers.common["Authorization"];
  }
};

const http: AxiosInstance = axios.create({
  baseURL: API,
  withCredentials: false,
  timeout: 90000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const internalConfig: InternalAxiosRequestConfig = { ...config };

    // Ensure headers is always defined
    internalConfig.headers = internalConfig.headers || {};

    const token: string | null = getAuthToken();
    if (token) {
      internalConfig.headers["Authorization"] = `Bearer ${token}`;
      internalConfig.headers["x-access-token"] = token;
    }

    return internalConfig;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

// Response interceptor
http.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (!error.response) {
      return Promise.reject(error);
    }

    switch (error.response.status) {
      case 401:
        httpLogout();
        return Promise.reject(error);
      case 404:
        return Promise.reject(error);
      case 422:
        return Promise.reject(error);
      case 429:
        return Promise.reject(error);
      default:
        break;
    }
    return Promise.reject(error);
  },
);

export const httpLogout = (): void => {
  cookie.deleteAll();
};

export const getAuthToken = (): string | null => {
  return cookie.get("token");
};

export default http;
