import { getToken } from "@/authentication";
import axios from "axios";
import * as _ from "lodash";
axios.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return Promise.resolve(config);
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 400) {
      const message = _.get(err.response, "data.message");
      const key = _.get(err.response, "data.key");
      if (message && key) {
        throw { message, key };
      }
    }
    throw err;
  }
);
