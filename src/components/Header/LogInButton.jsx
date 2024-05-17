import { Link } from "react-router-dom";
import { useAuthContext } from "../../globalContext/AuthContext";
import { useState } from "react";
import { getWatchList } from "../../assets/domain/apiClient";
import { DropDown } from "../../assets/utils/DropDown";

export const LogInButton = () => {
  const { isAuthenticated, username } = useAuthContext();
  const [isDropDown, setIsDropDown] = useState(false);

  const account_id = localStorage.getItem("account_id");

  return !isAuthenticated ? (
    <Link to="/login"> Login</Link>
  ) : (
    <>
      <div
        className="loginButton"
        onClick={() => {
          setIsDropDown((prev) => {
            return !prev;
          });
        }}
      >
        {username}
      </div>

      <DropDown
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
        classes="dropdown logdropdown"
      >
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
      </DropDown>
    </>
  );
};
