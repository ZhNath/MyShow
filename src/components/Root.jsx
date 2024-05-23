import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../globalContext/AuthContext";
import Footer from "./Footer/Footer";
import { FilterBy } from "./Main/FilterBy";

function Root() {
  return (
    <>
      <AuthProvider>
        <Header />
        <FilterBy />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default Root;
