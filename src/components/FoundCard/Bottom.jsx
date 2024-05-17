export const Bottom = ({ casting }) => {
  return (
    <>
      <h3 className="cast">Series Cast</h3>
      <div className="cast">
        {casting?.map((actor) => (
          <div key={actor?.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${actor?.profile_path}`}
              alt=""
              style={{ width: "120px" }}
            />
            <p>{actor?.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
