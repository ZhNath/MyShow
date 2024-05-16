import { Link } from "react-router-dom";
import { useAuthContext } from "../../globalContext/AuthContext";

export const LogInButton = () => {
  const { isAuthenticated } = useAuthContext();
  const isLoggedText = isAuthenticated ? "Logout" : "Login";
  return (
    <Link to="/login">
      <button className="loginButton">{isLoggedText}</button>
    </Link>
  );
};
