export const Select = ({ name, options, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value="">Select {name} </option>
      {options?.map((option) => (
        <option key={option.iso_639_1} value={option.iso_639_1}>
          {option?.english_name}
        </option>
      ))}
    </select>
  );
};
