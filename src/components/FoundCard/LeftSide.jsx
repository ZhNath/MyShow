export const LeftSide = ({ foundTVbyID }) => {
  return (
    <div className="left">
      <img src={`https://image.tmdb.org/t/p/w500${foundTVbyID?.poster_path}`} />
    </div>
  );
};
