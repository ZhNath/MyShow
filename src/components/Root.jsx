import "../styles/Root.css";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../globalContext/AuthContext";

function Root() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default Root;
