import store from "@/store";
import * as _ from "lodash";
export default function errorHandler(err) {
  console.error(err);
  let { message, text = "Ett fel uppstod" } = err;

  const axiosErrorMessage =
    err.isAxiosError && _.get(err, "response.data.message");

  if (axiosErrorMessage) {
    message = axiosErrorMessage;
    text = axiosErrorMessage;
  }
  store.globalError = { message, text };
}
