export interface ToDo {
  id: string;
  author: string;
  text: string;
  dateIssued: Date;
  dateDeadLine?: Date | null;
  complete: boolean;
}
