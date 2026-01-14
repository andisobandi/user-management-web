import axios from "axios";

export const defaultError = {
  code: 500,
  status: "error",
  message: "Failed to fetch data. Please contact developer.",
};

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
