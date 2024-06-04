import { ToWatchListButton } from "../../../assets/utils/ToWatchListButton";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../globalContext/AuthContext";

export const Center = ({ tv }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="center">
      <h1>
        {tv.name} <br />
        {tv.date}
      </h1>
      <div className="genresBox">
        <div className="rating">{tv.rating}</div>
        <div>{tv.genres.join(" | ")}</div>
      </div>
      <ToWatchListButton mediaId={tv.id} />
      <Link to={isAuthenticated ? "/watchlist" : "/login"}>
        <button className="toFromWatch">Go to Watch List</button>
      </Link>
      <div className="aboutFilm">
        <p>
          <i>{tv.tagline}</i>
        </p>
        <h3>Overview</h3>
        <span>{tv.overview}</span>
      </div>
      <div>
        <h3>{tv.creator}</h3>
        <p>creator</p>
      </div>
    </div>
  );
};
