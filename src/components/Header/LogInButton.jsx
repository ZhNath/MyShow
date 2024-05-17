import { Link } from "react-router-dom";
import { useAuthContext } from "../../globalContext/AuthContext";
import { useState } from "react";
import { getWatchList } from "../../assets/domain/apiClient";

export const LogInButton = () => {
  const { isAuthenticated, username } = useAuthContext();
  const [isClicked, setIsClicked] = useState(false);
  const account_id = localStorage.getItem("account_id");
  console.log(account_id);
  return !isAuthenticated ? (
    <Link to="/login"> Login</Link>
  ) : (
    <>
      <div
        className="loginButton"
        onClick={() => {
          setIsClicked(true);
        }}
      >
        {username}
      </div>
      {isClicked && (
        <div className="dropdown logdropdown">
          <div onClick={() => getWatchList(account_id)}>Watchlist</div>
          <div>Edit Profile</div>
          <div
            className="logdropdown-item"
            onClick={() => {
              localStorage.removeItem("session_id");
              localStorage.removeItem("username");
              window.location.reload();
            }}
          >
            Log Out
          </div>
        </div>
      )}
    </>
  );
};
