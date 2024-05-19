export const Bottom = ({ tv }) => {
  return (
    <>
      <h3 className="cast">Series Cast</h3>
      <div className="cast">
        {tv.cast.map((actor) => (
          <div key={actor.id} className="cast-item">
            <img
              src={`https://image.tmdb.org/t/p/original${actor.image}`}
              alt={actor.name}
              style={{ width: "120px" }}
            />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
