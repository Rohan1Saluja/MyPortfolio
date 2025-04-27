import baseApi from "./baseApi";

export const sendMail = async (payload: any) => {
  const response = baseApi.post("/api/contact", payload);
  return response;
};
