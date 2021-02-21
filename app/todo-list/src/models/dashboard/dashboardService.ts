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

export const deleteToDo = async (
  id: string,
  listId: string,
  toDoId: string
) => {
  return await axios.delete(`${baseUrl}/todo/${id}/${listId}/${toDoId}`);
};

export const removeToDo = (toDoId, toDos) => {
  console.log(toDos);
  toDos.map((toDo, index) => {
    console.log(toDo.id, toDoId);

    if (toDo.id === toDoId) {
      toDos.splice(index, 1);
    }
  });
};
