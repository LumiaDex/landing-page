import { ACCESS_TOKEN } from "@/utils/constant";
import axios, { AxiosError, AxiosResponse } from "axios";
import { camelCaseKeys } from "../utils/camelcase";

const TIMEOUT = 20000;
const instance = axios.create({
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (req: any) => {
    req.baseURL = import.meta.env.VITE_BASE_API;

    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      req.headers = {
        ...req.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return req;
  },
  (error: AxiosError) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    const result = res?.data;
    const error = res?.data?.error;
    if (error) {
      return Promise.reject(camelCaseKeys(error));
    }
    return Promise.resolve(result);
  },
  (axiosError: AxiosError) => {
    if (axiosError?.isAxiosError && !axiosError?.response) {
      throw new Error("Send request API failed");
    }
    const { response: { data } = {} } = axiosError;
    const { error }: any = data || {};
    return Promise.reject(camelCaseKeys(error || axiosError));
  }
);

// export const setAccessToken = (token: string) => {
//     accessToken = token;
// };

export default instance;
