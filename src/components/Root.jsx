import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../globalContext/AuthContext";
import Footer from "./Footer/Footer";
// import { FilterBy } from "./Main/FilterBy";
import { useThemeContext } from "../globalContext/ThemeContext";
import { useEffect } from "react";

function Root() {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default Root;
