export const RightSide = ({ foundTVbyID }) => {
  return (
    <div className="right">
      <div className="vote">{foundTVbyID?.vote_average}</div>
      <p>Total votes: </p>
      <p>{`${foundTVbyID?.vote_count}`}</p>
    </div>
  );
};
