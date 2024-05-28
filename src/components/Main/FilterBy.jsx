import { useState, useEffect } from "react";
import genres from "../../../public/genres.json";
import languages from "../../../public/languages.json";
import actors from "../../../public/actors.json";
import { FilterButton } from "./FilterButton";
import { fetchFilterData } from "../../assets/domain/apiClient";
import { dataFetcher } from "../../assets/domain/apiClient";

export const FilterBy = ({ filterList, setFilterList, onSubmit }) => {
  function Select({ name, options }) {
    const handleFilterChange = async (event) => {
      const selected = event.target.value;
      const data = await fetchFilterData(`with_original_language=${selected}`);
      setResultList(data);
    };

    return (
      <select name={name} onChange={handleFilterChange}>
        <option value="">Select {name} </option>
        {options?.map((option) => (
          <option key={option?.iso_639_1} value={option?.iso_639_1}>
            {option?.english_name}
          </option>
        ))}
      </select>
    );
  }

  const handleLanguageSelectOnChange = (language) => {
    return;
  };
  const handleActorSelectOnChange = (actor) => {
    return;
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

  return (
    <div className="filter-section">
      <div className="filter-buttons">
        {console.log(`FilterList`, filterList)}
        <h3>TV Serial Filter</h3>

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
      <Select
        name="actors"
        options={actors}
        onChange={handleActorSelectOnChange}
      />
      <button type="submit" onClick={handleSubmitOnClick}>
        apply Filter
      </button>
    </div>
  );
};
