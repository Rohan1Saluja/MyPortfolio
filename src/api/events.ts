import baseApi from "./baseApi";

export const getCommunityMeetups = async () => {
  const response = await baseApi.get("/events");
  return response?.data;
};

export const getCommunityMeetupsSummary = async () => {
  const response = await baseApi.get("/events/summary");
  return response?.data;
};
