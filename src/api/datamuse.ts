import museApi from "./museApi";

export const getSynonyms = async (word: string) => {
  const response = await museApi.get(`/words?rel_syn=${word}`);
  return response.data;
};

export const getAntonyms = async (word: string) => {
  const response = await museApi.get(`/words?rel_ant=${word}`);
  return response.data;
};
export const getHomophones = async (word: string) => {
  const response = await museApi.get(`/words?rel_hom=${word}`);
  return response.data;
};
