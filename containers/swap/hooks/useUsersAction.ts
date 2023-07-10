import { useRecoilState } from "recoil";
import usersService from "../../../services/usersService";
import { accessTokenState } from "../../../states/accessTokenState";
import Router from "next/router";
import { useEffect } from "react";
import { openLoginErrorState } from "../../../states/openLoginErrorState";
import { signUpStatusState } from "../../../states/signUpStatusState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { SignUpStatusType } from "../../../types/SignUpStatusType";
import { useCookies } from "react-cookie";

const useUsersAction = () => {
    const setOpenLoginError = useSetRecoilState(openLoginErrorState);
    const setOpenSignUpStatus = useSetRecoilState(signUpStatusState);
    const openSignUpStatus = useRecoilValue(signUpStatusState);
    const [cookies, setCookie] = useCookies(["accessToken"]);

    const handleLoginSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const response = await usersService.login(
            data.get("email") as string,
            data.get("password") as string
        );

        if (response.status === 200) {
            setCookie("accessToken", response.accessToken);
            Router.push("/home");
        } else {
            setOpenLoginError(true);
        }
    };

    const handleSignUpSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get("password") !== data.get("confirmPassword")) {
            setOpenSignUpStatus(() => {
                return {
                    ...openSignUpStatus,
                    isConfirmationPassWordDontMatch: true,
                } as SignUpStatusType;
            });
            return;
        }
        const requiredField = [
            "password",
            "confirmPassword",
            "email",
            "lastName",
            "firstName",
        ];
        const emptyField = requiredField.filter(
            (current) => data.get(current) === ""
        );
        if (emptyField.length > 0) {
            setOpenSignUpStatus(() => {
                return {
                    ...openSignUpStatus,
                    isRequiredFieldEmpty: true,
                } as SignUpStatusType;
            });
            return;
        }
        const response = await usersService.signInup({
            login: data.get("email") as string,
            firstName: data.get("firstName") as string,
            lastName: data.get("lastName") as string,
            password: data.get("password") as string,
            birthDay: new Date(data.get("birthDay") as string),
        });
        if (response?.status === 200) {
            setOpenSignUpStatus(() => {
                return {
                    ...openSignUpStatus,
                    isCreationCompteSuccess: true,
                } as SignUpStatusType;
            });
            return;
        }
        console.log(response);
    };

    const checkUsersToken = () => {
        if (!cookies["accessToken"]) {
            Router.push("/login");
        }
    };

    const logOut = () => {
        //setAccessToken(null);
        setCookie("accessToken", false);
        Router.push("/login");
        console.log(cookies);
    };
    return { handleLoginSubmit, handleSignUpSubmit, checkUsersToken, logOut };
};

export { useUsersAction };
