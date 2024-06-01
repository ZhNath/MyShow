import genres from "../../../public/genres.json";
import { FilterButton } from "./FilterButton";
import { RangeTracker } from "./RangeTracker";
import { ResetFilters } from "./ResetFilters";
import { LanguageSelect } from "./LanguageSelect";
import { SubmitButton } from "./SubmitButton";
import { useState } from "react";

export const FilterBy = ({ allData, setGallery }) => {
  const [languageFilter, setLanguageFilter] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);

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
          />
        ))}
      </div>

      <LanguageSelect setLanguageFilter={setLanguageFilter} />
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
