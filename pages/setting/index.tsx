import SignIn from "../../components/login/SignIn";
import type { NextPage } from "next";
import ToolBar from "../../components/ToolBar";
import { openLoginErrorState } from "../../states/openLoginErrorState";
import { useRecoilValue } from "recoil";
import SettingContainer from "../../containers/setting/SettingContainer";
import { FormEvent } from "react";

const Setting: NextPage = () => {
  
  const openLoginError = useRecoilValue(openLoginErrorState);
  return <>
            <ToolBar/>
            <SettingContainer handleSubmit={function (event: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
      } } signUpStatus={null} />
        </>;
};

export default Setting;