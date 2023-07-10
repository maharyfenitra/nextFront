import SignUp from "../../components/login/SignUp";
import type { NextPage } from "next";
import { useUsersAction } from "../../containers/swap/hooks/useUsersAction";
import { signUpStatusState } from "../../states/signUpStatusState";
import { useRecoilValue } from "recoil";

const Home: NextPage = () => {
  const { handleSignUpSubmit } = useUsersAction();
  const signUpStatus = useRecoilValue(signUpStatusState);
  return (
    <SignUp handleSubmit={handleSignUpSubmit} signUpStatus={signUpStatus} />
  );
};
export default Home;
