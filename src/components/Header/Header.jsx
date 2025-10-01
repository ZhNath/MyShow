import { Input_DropDown } from "./Input_DropDown";
import { LogInButton } from "./LogInButton";
import { BackButton } from "./BackButton";
import { ColorSchemeToggler } from "./ColorSchemeToggler";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="legacy">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </div>
      <div className="headerBottom">
        <Link to="/">
          <h1>My Show</h1>
        </Link>
        <BackButton />

        <Input_DropDown />
        <ColorSchemeToggler />
        <LogInButton />
      </div>
    </div>
  );
};
