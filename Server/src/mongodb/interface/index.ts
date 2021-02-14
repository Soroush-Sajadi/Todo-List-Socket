export interface SignIn {
  username: string;
  email: string;
  password: string;
}
export interface LogIn {
  email: string;
  password: string;
}
export interface ToDo {
  author: string;
  text: string;
  dateIssued: Date;
  dateDeadLine?: Date | null;
  complete: boolean;
}
