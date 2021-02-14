export interface ToDo {
  author: string;
  text: string;
  dateIssued: Date;
  dateDeadLine?: Date | null;
  complete: boolean;
}
