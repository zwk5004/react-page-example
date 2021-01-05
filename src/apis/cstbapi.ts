import axios from "axios";
import config from "../config/config";
import { AUTH_TOKEN } from "../constants/common";

const cstbapi = axios.create({
  baseURL: config.BASE_HOST_URL
});

cstbapi.interceptors.request.use(request => {
  const token = localStorage.getItem(AUTH_TOKEN);
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  // request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
});

export { cstbapi };
