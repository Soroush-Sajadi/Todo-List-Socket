import axios from "axios";

export interface LogIn {
  email: string;
  password: string;
}
const baseUrl = "http://localhost:5000/api/account";
export const logIn = async (data: LogIn) => {
  return await axios.get(`${baseUrl}/${data.email}/${data.password}`);
};
