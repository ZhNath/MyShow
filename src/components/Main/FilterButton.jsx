import { useState, useEffect } from "react";

export const FilterButton = ({ name, id, style, setFilterList }) => {
  const [selected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    handleFilterListChange(id, selected);
  }, [selected]);

  const handleFilterListChange = (id, selected) => {
    if (selected) {
      setFilterList((prev) => [...prev, id]);
    } else {
      setFilterList((prev) => prev.filter((item) => item !== id));
    }
  };

  return (
    <button
      className={selected ? "cta selected" : "cta"}
      onClick={handleOnClick}
      style={style}
    >
      <span>{name}</span>
    </button>
  );
};
