import genres from "../../../public/genres.json";
import languages from "../../../public/languages.json";
import { FilterButton } from "./FilterButton";
import { RangeTracker } from "./RangeTracker";
import { ResetFilters } from "./ResetFilters";
import { Select } from "./Select";

export const FilterBy = ({
  setFilterList,
  setLanguageFilterList,
  setRatingValue,
  ratingValue,
  onSubmit,
}) => {
  const handleLanguageSelectOnChange = (event) => {
    const value = event.target.value;
    if (value === "xx") {
      setLanguageFilterList([]);
    } else {
      setLanguageFilterList([value]);
    }
  };

  const handleFilterListChange = (id, selected) => {
    if (selected) {
      setFilterList((prev) => [...prev, id]);
    } else {
      setFilterList((prev) => prev.filter((item) => item !== id));
    }
  };

  const handleSubmitOnClick = () => {
    onSubmit();
  };

  const handleTrackRatingChange = (event) => {
    setRatingValue(event.target.value);
  };

  return (
    <div className="filter-section">
      <p>TV SERIAL FILTER</p>
      <div className="filter-buttons">
        {genres.genres.map((genre) => (
          <FilterButton
            key={genre.id}
            name={genre.name}
            id={genre.id}
            onFilterListChange={handleFilterListChange}
          />
        ))}
      </div>

      <Select
        name="language"
        options={languages}
        onChange={handleLanguageSelectOnChange}
      />
      <RangeTracker
        ratingValue={ratingValue}
        onChange={handleTrackRatingChange}
      />
      <ResetFilters
        setFilterList={setFilterList}
        setLanguageFilterList={setLanguageFilterList}
        setRatingValue={setRatingValue}
      />
      <button type="submit" className="submit" onClick={handleSubmitOnClick}>
        FILTER
      </button>
    </div>
  );
};
