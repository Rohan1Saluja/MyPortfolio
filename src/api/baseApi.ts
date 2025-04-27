import axios from "axios";

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,
});

baseApi.interceptors.request.use(
  function (config) {
    // do something
    return config;
  },
  async function (error) {
    return await Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    console.log("Error Code - ", error.response.status);
    return await Promise.reject(error);
  }
);

export default baseApi;
