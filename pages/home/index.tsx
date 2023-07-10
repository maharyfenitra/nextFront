import React from "react";
import SwapContainer from "../../containers/swap/SwapContainer";
import ToolBar from "../../components/ToolBar";
import type { NextPage } from "next";
import { useCookies } from "react-cookie";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import Link from "next/link";

const HomeComponents = () => {
  return (
    <React.Fragment>
      <ToolBar />
      <SwapContainer />
    </React.Fragment>
  );
};

const SessionExpire = () => {
  return (
    <React.Fragment>
      <Alert severity="warning">
        Your session expire <Link href="/login">Login</Link>
      </Alert>
    </React.Fragment>
  );
};

const Home: NextPage = () => {
  const [cookies, setCookie] = useCookies(["accessToken"]);
  const [isSession, setIsSession] = useState(false);

  useEffect(() => {
    setIsSession(!(cookies.accessToken === "false"));
  }, [cookies.accessToken]);

  return (
    <React.Fragment>
      {isSession ? <HomeComponents /> : <SessionExpire />}
    </React.Fragment>
  );
};

export default Home;
