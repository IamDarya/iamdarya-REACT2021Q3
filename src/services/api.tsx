import axios from "../../node_modules/axios/index";

export const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/",
  timeout: 5000,
});

// export default axiosInstance;
