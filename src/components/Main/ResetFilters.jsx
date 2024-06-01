import { useEffect } from "react";

export const ResetFilters = ({
  setFilterList,
  setLanguageFilterList,
  setRatingValue,
  filterList,
  languageFilterList,
  ratingValue,
}) => {
  const handleResetFilters = () => {
    setFilterList([]);
    setLanguageFilterList([]);
    setRatingValue(0);
  };

  useEffect(() => {}, [filterList, languageFilterList, ratingValue]);

  return (
    <div className="resetFilters">
      <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
};
