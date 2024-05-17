import { useAuthContext } from "../../globalContext/AuthContext";
import { Link } from "react-router-dom";
import { addToWatchList } from "../domain/apiClient";

export const ToWatchListButton = (text, mediaId) => {
  const { isAuthenticated } = useAuthContext();
  const accountId = localStorage.getItem("account_id");
  return (
    <Link to={isAuthenticated ? "" : "/login"}>
      <button
        className="addToWatch"
        onClick={() => addToWatchList(accountId, mediaId)}
      >
        {text}
      </button>
    </Link>
  );
};
