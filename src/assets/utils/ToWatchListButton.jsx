import { useAuthContext } from "../../globalContext/AuthContext";
import { Link } from "react-router-dom";
import { addToWatchList } from "../domain/apiClient";
import { useState, useEffect } from "react";

export const ToWatchListButton = (mediaId) => {
  const { isAuthenticated } = useAuthContext();
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [text, setText] = useState("Add to Watchlist");
  const accountId = localStorage.getItem("account_id");

  useEffect(() => {
    if (isInWatchList) {
      addToWatchList(accountId, mediaId);
      setText("Remove from Watchlist");
    } else {
      setText("Add to Watchlist");
    }
  }, [isInWatchList]);

  return (
    <Link to={isAuthenticated ? "" : "/login"}>
      <button
        className="toFromWatch"
        onClick={() => setIsInWatchList(!isInWatchList)}
      >
        {text}
      </button>
    </Link>
  );
};
