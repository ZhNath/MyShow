export const RightSide = ({ tv }) => {
  return (
    <div className="right">
      <div className="vote">{tv.voteAverage}</div>
      <p>Total votes: </p>
      <p>{`${tv.voteCount}`}</p>
    </div>
  );
};
