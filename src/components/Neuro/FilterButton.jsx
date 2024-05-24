import { useState } from "react";

export const FilterButton = ({ name }) => {
  const [selected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!selected);
  };

  return (
    <button
      className={selected ? "cta selected" : "cta"}
      onClick={handleOnClick}
    >
      <span>{name}</span>
    </button>
  );
};
