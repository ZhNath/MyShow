import "../../styles/Header.css";
import { Input } from "./Input";
import { LogInButton } from "./LogInButton";
import { BackButton } from "./BackButton";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>My Show</h1>
      </Link>
      <BackButton />
      <Input />
      <LogInButton />
    </div>
  );
};
