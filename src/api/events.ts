import baseApi from "./baseApi";

export const getCommunityMeetups = async () => {
  const response = await baseApi.get("/events");
  return response?.data;
};
