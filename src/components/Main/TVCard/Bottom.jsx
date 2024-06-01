import { Link } from "react-router-dom";

export const Bottom = ({ tv }) => {
  return (
    <>
      <h3 className="cast">Series Cast</h3>
      <div className="cast">
        {tv.cast.map((actor, index) => (
          <div key={`${actor.id}-${index}`} className="cast-item">
            <Link to={`/actor/${actor.name}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${actor.image}`}
                alt={actor.name}
                style={{ width: "120px" }}
              />
            </Link>
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
