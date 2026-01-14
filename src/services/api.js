import { SERVICES } from "@config/services";
import axiosClient from "./axios-client";

export const API = {
  users: () => axiosClient.get(SERVICES.USERS),
  images: (data) => axiosClient.get(SERVICES.IMAGES, { params: { data } }),
};
