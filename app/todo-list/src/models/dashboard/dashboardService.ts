import axios from "axios";
import { ToDo } from "./todoModel";

const baseUrl = "http://localhost:5000/api/list";
export const addList = async (data: string, id: string, listId: string) => {
  return await axios.post(baseUrl, { list: data, id: id, listId: listId });
};

export const getLists = async (id: string) => {
  return await axios.get(`${baseUrl}/${id}`);
};

export const addToDo = async (data: ToDo, id: string, listId: string) => {
  return await axios.post(`${baseUrl}/todo`, {
    data: data,
    id: id,
    listId: listId
  });
};

export const getToDos = async (id: string, listId: string) => {
  return await axios.get(`${baseUrl}/todos/${id}/${listId}`);
};
