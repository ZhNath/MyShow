import { Link } from "react-router-dom";
import { useAuthContext } from "../../globalContext/AuthContext";
import { useState } from "react";
import { DropDown } from "../../assets/utils/DropDown";

export const LogInButton = () => {
  const { isAuthenticated, username } = useAuthContext();
  const [isDropDown, setIsDropDown] = useState(false);

  const account_id = localStorage.getItem("account_id");

  return !isAuthenticated ? (
    <Link to="/login"> Login</Link>
  ) : (
    <>
      <button
        className="loginButton"
        onClick={() => {
          setIsDropDown((prev) => {
            return !prev;
          });
        }}
      >
        {username}
      </button>

      <DropDown
        isDropDown={isDropDown}
        setIsDropDown={setIsDropDown}
        classes="dropdown logdropdown"
      >
        <Link to="/watchlist">Watchlist</Link>
        <div className="linie"></div>
        <Link to="/watchlist/Want To Watch" style={{ fontSize: "0.8rem" }}>
          Want to watch
        </Link>
        <Link to="/watchlist/Watching" style={{ fontSize: "0.8rem" }}>
          Watching
        </Link>
        <Link to="/watchlist/Completed" style={{ fontSize: "0.8rem" }}>
          Completed
        </Link>
        <Link to="/watchlist/Dropped" style={{ fontSize: "0.8rem" }}>
          Dropped
        </Link>
        <div className="linie"></div>

        <div>Edit Profile</div>
        <div className="linie"></div>

        <div
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
