import axios from "axios";

const baseUrl = "http://localhost:5000/api/list";
export const addList = async (data: string) => {
  return await axios.post(baseUrl, { list: data });
};

export const getLists = async (id: string) => {
  return await axios.get(`${baseUrl}/${id}`);
};