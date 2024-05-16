import { useAuthContext } from "../../globalContext/AuthContext";
import { Link } from "react-router-dom";

export const ToWatchListButton = (text) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Link to={isAuthenticated ? "/" : "/login"}>
      <button className="addToWatch">{text}</button>
    </Link>
  );
};
