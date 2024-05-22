import { ToWatchListButton } from "../../assets/utils/ToWatchListButton";
import { Link } from "react-router-dom";

export const Center = ({ tv }) => {
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
      <Link to="/watchlist">
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
