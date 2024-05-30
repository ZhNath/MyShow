import { useState, useEffect } from "react";
import genres from "../../../public/genres.json";
import languages from "../../../public/languages.json";
import actors from "../../../public/actors.json";
import { FilterButton } from "./FilterButton";

export const FilterBy = ({
  setFilterList,
  onSubmit,
  setActorFilterList,
  setLanguageFilterList,
  languageFilterList,
  actorFilterList,
}) => {
  function Select({ name, options, valuefield, keyfield, onChange }) {
    return (
      <select name={name} onChange={onChange}>
        <option value="">Select {name} </option>
        {options?.map((option) => (
          <option key={option[keyfield]} value={option[valuefield]}>
            {option?.english_name}
          </option>
        ))}
      </select>
    );
  }

  const handleLanguageSelectOnChange = (event) => {
    setLanguageFilterList(event.target.value);
  };

  const handleActorSelectOnChange = (event) => {
    setActorFilterList(event.target.value);
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
        <div className="filter-group">
      <Select
        name="language"
        options={languages}
        keyfield="iso_639_1"
        valuefield="iso_639_1"
        onChange={handleLanguageSelectOnChange}
      />
    
      <Select
        name="actor"
        options={actors}
        valuefield="id"
        keyfield="id"
        onChange={handleActorSelectOnChange}
      />

      <div className="submit">
        <button type="submit" onClick={handleSubmitOnClick}>
          Filter
        </button>
      </div>
    </div>
  );
};
