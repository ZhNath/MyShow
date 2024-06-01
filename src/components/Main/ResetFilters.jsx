import { handleOnClick } from "./handleOnClick";
import { useEffect } from "react";

export const ResetFilters = ({
  setFilterList,
  setLanguageFilterList,
  setRatingValue,
  ratingValue,
  filterList,
  languageFilter,
  allData,
  setGallery,
}) => {
  const handleResetFilters = () => {
    setFilterList([]);
    setLanguageFilterList([]);
    setRatingValue(0);

    setGallery(allData);
  };

  useEffect(() => {
    handleOnClick({
      ratingValue,
      filterList,
      languageFilter,
      allData,
      setGallery,
    });
  }, [ratingValue, filterList, languageFilter, allData, setGallery]);

  return (
    <div className="resetFilters">
      <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
};
