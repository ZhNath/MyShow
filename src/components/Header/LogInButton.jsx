import { Link } from "react-router-dom";

export const LogInButton = () => {
  return (
    <Link to="/login">
      <button className="loginButton">Log In</button>
    </Link>
  );
};
