import { useState, useEffect } from "react";

export const FilterButton = ({
  name,
  id,
  style,
  setFilterList,
  filterList,
}) => {
  const [selected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!selected);
  };

  const handleFilterListChange = (id, selected) => {
    if (selected) {
      setFilterList((prev) => [...prev, id]);
    } else {
      setFilterList((prev) => prev.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    handleFilterListChange(id, selected);
  }, [selected]);

  useEffect(() => {
    if (filterList.length === 0) {
      setSelected(false);
    }
  }, [filterList]);

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
