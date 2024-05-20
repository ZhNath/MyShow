import { useAuthContext } from "../../globalContext/AuthContext";
import { Link } from "react-router-dom";
import { addToWatchList, deleteFromWatchList } from "../domain/apiClient";
import { useState, useEffect } from "react";
import { IsTVinWatchList } from "./IsTVinWatchList";

export const ToWatchListButton = ({ mediaId }) => {
  const { isAuthenticated, idWatchList } = useAuthContext();
  const isInWatchListInitially = IsTVinWatchList(mediaId);
  const [isInWatchList, setIsInWatchList] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    setIsInWatchList(isInWatchListInitially);
    setText(
      isInWatchListInitially ? "Remove from Watchlist" : "Add to Watchlist"
    );
  }, [isInWatchListInitially]);

  useEffect(() => {
    if (isInWatchList) {
      addToWatchList(mediaId);
      setText("Remove from Watchlist");
    } else {
      deleteFromWatchList(mediaId);
      setText("Add to Watchlist");
    }
  }, [isInWatchList]);

  return (
    <Link to={isAuthenticated ? "" : "/login"}>
      <button
        className="toFromWatch"
        onClick={() => {
          setIsInWatchList(!isInWatchList);
        }}
      >
        {text}
      </button>
    </Link>
  );
};
