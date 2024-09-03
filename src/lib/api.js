import axios from "axios";
import { setAuthToken } from "./setAuthToken";

const backendUri = "http://localhost:5000";

export const axiosHandle = (url, method, data, callback = f) => {
  setAuthToken();
  axios({
    method: method,
    url: `${backendUri}/${url}`,
    data: data,
  })
    .then((res) => callback(res.data))
    .catch((err) => callback(err.response.data));
};
