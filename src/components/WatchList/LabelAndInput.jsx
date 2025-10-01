export function LabelAndInput({ id, value, onClick }) {
  return (
    <label>
      <input
        type="radio"
        name={`statusTV-${id}`}
        value={value}
        onClick={onClick}
      />
      {value}
    </label>
  );
}
