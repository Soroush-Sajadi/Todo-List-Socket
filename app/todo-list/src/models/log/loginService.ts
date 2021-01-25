import axios from "axios";


export interface LogIn {
  email: string;
  password: string;
}
const baseUrl = '/api/account'
export const signIn = async (data: LogIn) => {
  const result = await axios.get(baseUrl, {
    data
  });
  console.log(result)
}