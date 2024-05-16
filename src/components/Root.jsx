import { makeToken, makeSession, validateUser } from "../assets/server";
import "../styles/Root.css";
import { Header } from "./Header/Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  const [requestToken, setRequestToken] = useState("");

  useEffect(() => {
    const requestToken = async () => {
      const data = await makeToken();
      setRequestToken(data);
      console.log(data);
    };
    requestToken();
  }, []);

  useEffect(() => {
    const authenticateUser = async () => {
      if (requestToken) {
        const data = await validateUser(requestToken);
      }
    };
    authenticateUser();
  }, [requestToken]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
