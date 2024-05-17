export const RightSide = ({ foundTVbyID }) => {
  return (
    <div className="right">
      <div className="vote">{foundTVbyID?.vote_average}</div>
      <p>Total votes: </p>
      <p
        style={{ fontSize: "1em", lineHeight: "0" }}
      >{`${foundTVbyID?.vote_count}`}</p>
    </div>
  );
};
