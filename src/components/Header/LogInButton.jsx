import { Link } from "react-router-dom";
import { useAuthContext } from "../../globalContext/AuthContext";

export const LogInButton = () => {
  const { isAuthenticated } = useAuthContext();

  const isLoggedText = isAuthenticated ? "Logout" : "Login";

  return isLoggedText === "Login" ? (
    <Link to="/login">
      <button className="loginButton">{isLoggedText}</button>
    </Link>
  ) : (
    <button
      className="loginButton"
      onClick={() => {
        localStorage.removeItem("session_id");
        localStorage.removeItem("username");
        window.location.reload();
      }}
    >
      {isLoggedText}
    </button>
  );
};
