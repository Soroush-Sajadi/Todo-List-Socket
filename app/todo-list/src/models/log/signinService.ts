import axios from "axios";
export interface SignIn {
  username: string;
  email: string;
  password: string;
}

const baseUrl = "http://localhost:5000/api/account";
export const signIn = async (data: SignIn) => {
  return await axios.post(baseUrl, data);
};
