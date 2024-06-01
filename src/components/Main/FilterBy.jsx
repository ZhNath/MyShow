import genres from "../../../public/genres.json";
import { FilterButton } from "./FilterButton";
import { RangeTracker } from "./RangeTracker";
import { ResetFilters } from "./ResetFilters";
import { LanguageSelect } from "./LanguageSelect";
import { SubmitButton } from "./SubmitButton";
import { useState, useEffect } from "react";
import { handleOnClick } from "./handleOnClick";

export const FilterBy = ({ allData, setGallery }) => {
  const [languageFilter, setLanguageFilter] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);

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
    <div className="filter-section">
      <p>TV SERIAL FILTER</p>
      <div className="filter-buttons">
        {genres.genres.map((genre) => (
          <FilterButton
            key={genre.id}
            name={genre.name}
            id={genre.id}
            setFilterList={setFilterList}
            filterList={filterList}
          />
        ))}
      </div>

      <LanguageSelect
        setLanguageFilter={setLanguageFilter}
        languageFilter={languageFilter}
      />

      <RangeTracker ratingValue={ratingValue} setRatingValue={setRatingValue} />

      <ResetFilters
        setFilterList={setFilterList}
        setLanguageFilterList={setLanguageFilter}
        setRatingValue={setRatingValue}
        ratingValue={ratingValue}
        filterList={filterList}
        languageFilter={languageFilter}
        allData={allData}
        setGallery={setGallery}
      />
      <SubmitButton
        languageFilter={languageFilter}
        filterList={filterList}
        ratingValue={ratingValue}
        allData={allData}
        setGallery={setGallery}
      />
    </div>
  );
};
