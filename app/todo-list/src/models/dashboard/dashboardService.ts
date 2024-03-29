import axios from "axios";
import { ToDo, ToDoEdit } from "./todoModel";

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
  toDos.map((toDo, index) => {
    if (toDo.id === toDoId) {
      toDos.splice(index, 1);
    }
  });
};

export const checkedToDo = async (
  id: string,
  listId: string,
  toDoId: string,
  complete: boolean
) => {
  return await axios.put(`${baseUrl}/todo/checked`, {
    id: id,
    listId: listId,
    toDoId: toDoId,
    complete: complete
  });
};

export const editToDo = async (data: ToDoEdit) => {
  return await axios.put(`${baseUrl}/todo/edit`, {
    data: data
  });
};

export const toDoEdit = (toDos: Array<ToDo>, editToDo: ToDoEdit) => {
  return toDos.map(toDo => {
    if (toDo.id === editToDo.toDoId) {
      toDo.text = editToDo.text;
      toDo.dateDeadLine = editToDo.deadLine;
    }
    return toDos;
  });
};

export const toDoShare = async (
  toDos: Array<ToDo>,
  email: string,
  listName: string,
  listId: string
) => {
  const toDosInfo = {
    toDos: toDos,
    email: email,
    listName: listName,
    listId: listId
  };
  return await axios.get(`${baseUrl}/todo/share/${JSON.stringify(toDosInfo)}`);
};

export const removeList = async (id: string, listId: string) => {
  return await axios.delete(`${baseUrl}/${id}/${listId}`);
};
