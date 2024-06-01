import { handleOnClick } from "./handleOnClick";

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
    handleOnClick({
      ratingValue,
      filterList,
      languageFilter,
      allData,
      setGallery,
    });
  };

  return (
    <div className="resetFilters">
      <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
};
