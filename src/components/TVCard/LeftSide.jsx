export const LeftSide = ({ tv }) => {
  return (
    <div className="left">
      <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} />
    </div>
  );
};
