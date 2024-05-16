import {
  makeToken,
  makeSession,
  validateUser,
} from "../../assets/domain/apiClient";
import { useState, useEffect } from "react";
import "../../styles/LogIn.css";
import { useAuthContext } from "../../globalContext/AuthContext";
import { FormElements } from "./FormElements";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  const handleLogIn = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const request_token = await makeToken();

      const isAuth = await validateUser(username, password, request_token);

      if (isAuth) {
        setIsAuthenticated(true);
        const session_id = await makeSession(request_token);
        localStorage.setItem("session_id", session_id);
        localStorage.setItem("username", username);
        window.history.back();
      } else {
        setError("Authentication failed");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const handleOnChange = (e) => {
    e.target.id === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
    setError(null);
  };
  return (
    <div className="loginBox">
      <h2>Login to your account</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogIn}>
        <FormElements
          id="username"
          value={username}
          listener={handleOnChange}
        />
        <FormElements
          id="password"
          value={password}
          listener={handleOnChange}
        />
        <span>
          In order to use the editing and rating capabilities of TMDB, as well
          as get personal recommendations you will need to login to your
          account. If you do not have an account, registering for an account is
          free and simple.{" "}
        </span>
        <a href="https://www.themoviedb.org/signup">Register</a>
        <span>If you signed up but didn't get your verification email </span>
        <a href="https://www.themoviedb.org/resend-email-verification">
          Verify email
        </a>{" "}
        <div className="submit">
          <button type="submit" disabled={isAuthenticated}>
            Log In
          </button>
          <button>
            <a href="#">Reset password</a>
          </button>
        </div>
      </form>
    </div>
  );
};
