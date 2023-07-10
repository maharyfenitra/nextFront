import SignIn from "../../components/login/SignIn";
import type { NextPage } from "next";
import { useUsersAction } from "../../containers/swap/hooks/useUsersAction";
import { openLoginErrorState } from "../../states/openLoginErrorState";
import { useRecoilValue } from "recoil";

const Home: NextPage = () => {
  const { handleLoginSubmit } = useUsersAction();
  const openLoginError = useRecoilValue(openLoginErrorState);
  return <SignIn handleSubmit={handleLoginSubmit} open={openLoginError} />;
};

export default Home;
