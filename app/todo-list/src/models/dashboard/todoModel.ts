export interface ToDo {
  id: string;
  author: string;
  text: string;
  dateIssued: Date;
  dateDeadLine?: Date | null;
  complete: boolean;
}
export interface ToDoEdit {
  id: string;
  listId: string;
  toDoId: string;
  text: string;
  deadLine: Date;
}
