import { handleOnClick } from "./handleOnClick";

export const SubmitButton = ({
  ratingValue,
  filterList,
  languageFilter,
  allData,
  setGallery,
}) => {
  const handleClick = () => {
    handleOnClick({
      ratingValue,
      filterList,
      languageFilter,
      allData,
      setGallery,
    });
  };

  return (
    <button type="submit" className="submit" onClick={handleClick}>
      FILTER
    </button>
  );
};
