import { LeetCodeData } from "../interfaces/leetcode.model";
import baseApi from "./baseApi";

export const getLeetCodeActivity = async (
  year: number,
  signal?: AbortSignal,
): Promise<LeetCodeData> => {
  const response = await baseApi.get("/leetcode", {
    params: {
      year,
    },
    signal,
  });

  return response?.data;
};
