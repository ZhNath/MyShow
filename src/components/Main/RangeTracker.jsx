export const RangeTracker = ({ ratingValue, onChange }) => {
  return (
    <div className="rangeWrapper">
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={ratingValue}
        className="ratingSlider"
        onChange={onChange}
      />{" "}
      <div>
        <p>
          min rating:&nbsp;&nbsp;&nbsp;<span>{ratingValue}</span>
        </p>
      </div>
    </div>
  );
};
