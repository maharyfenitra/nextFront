import axios from "axios";
import { URI } from "./utils/variables";

class UsersService {
    readonly URL = `${URI}/users/`;
    login(username: string, password: string) {
        return axios
            .post(`${this.URL}login`, {
                login: username,
                password: password,
            })
            .then((response) => {
                console.log(response)
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return null;
            });
    }
    signInup(user: TUser) {
        return axios
            .post(`${this.URL}newUser`, {
                login: user.login,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                birthDay: user.birthDay,
            })
            .then((response) => {
                return response.data;
            });
    }
    testAuth() {
        const headers = {
            "Content-Type": "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Im1haGFyeWZlbml0cmFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkMC5KZnF1Li9WWUU1d1NkVGpNZW1JLlBjWk1BVGUwR1NKUVNQRUovdzdxd0dtU0NNdHZSSjYiLCJpYXQiOjE2NTk4MDY1NTJ9.U--XCZ-EXLBpZJ7RTKTHpvGNXfa54-mN7JbJgj_GyVE",
        };
        return axios.post(`${this.URL}useToken`, { message: "" }, { headers });
    }
}

type TUser = {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDay: Date;
};
export default new UsersService();
