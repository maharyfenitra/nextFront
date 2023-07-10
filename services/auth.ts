import axios from "axios";
import { URI } from "./utils/variables";

export const login = (username: string, password: string) => {
  return axios
    .post(`${URI}/users/login`, {
      login: username,
      password: password,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
};
