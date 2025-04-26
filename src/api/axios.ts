import axios from "axios";
console.log("BASE - ", import.meta.env.VITE_APP_MUSE_API_URL);
const museApi = axios.create({
  baseURL: import.meta.env.VITE_APP_MUSE_API_URL,
});

museApi.interceptors.request.use(
  function (config) {
    // do something
    return config;
  },
  async function (error) {
    return await Promise.reject(error);
  }
);

museApi.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    console.log("Error Code - ", error.response.status);
    return await Promise.reject(error);
  }
);

export default museApi;
