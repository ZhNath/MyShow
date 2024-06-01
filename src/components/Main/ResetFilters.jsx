import { handleOnClick } from "./handleOnClick";
import { useEffect } from "react";

export const ResetFilters = ({
  setFilterList,
  setLanguageFilterList,
  setRatingValue,
  allData,
  setGallery,
}) => {
  const handleResetFilters = () => {
    setFilterList([]);
    setLanguageFilterList([]);
    setRatingValue(0);

    setGallery(allData);
  };

  return (
    <button type="submit" className="submit" onClick={handleResetFilters}>
      Reset Filters
    </button>
  );
};
