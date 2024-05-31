import genres from "../../../public/genres.json";
import languages from "../../../public/languages.json";
import { FilterButton } from "./FilterButton";
import { useEffect } from "react";

export const FilterBy = ({
  setFilterList,
  onSubmit,
  setLanguageFilterList,
  ratingValue,
  setRatingValue,
}) => {
  function Select({ name, options, onChange }) {
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
  }

  const handleLanguageSelectOnChange = (event) => {
    setLanguageFilterList(event.target.value);
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

      <div className="rangeWrapper">
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={ratingValue}
          className="ratingSlider"
          onChange={handleTrackRatingChange}
        />{" "}
        <div>
          <p>
            min rating:&nbsp;&nbsp;&nbsp;<span>{ratingValue}</span>
          </p>
        </div>
      </div>

      <button type="submit" className="submit" onClick={handleSubmitOnClick}>
        FILTER
      </button>
    </div>
  );
};
