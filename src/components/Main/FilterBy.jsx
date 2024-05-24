import { useState, useEffect } from "react";
import {
  genresList,
  languagesList,
  fetchFilterData,
} from "../../assets/domain/apiClient";

export const FilterBy = () => {
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    const fetchFilterLists = async () => {
      const dataGenres = await genresList();
      setGenres(dataGenres);
      const dataLanguage = await languagesList();
      setLanguages(dataLanguage);
    };
    fetchFilterLists();
  }, []);

  function Select({ name, options }) {
    const handleFilterChange = async (event) => {
      const selected = event.target.value;
      // const data = await fetchFilterData(`with_genres=${selected}`);
      const data = await fetchFilterData(`with_original_language=${selected}`);
      setResultList(data);
    };

    return (
      <select name={name} onChange={handleFilterChange}>
        <option value="">Select {name}</option>
        {options?.map((option) => (
          <option key={option?.iso_639_1} value={option?.iso_639_1}>
            {option?.english_name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <>
      <div className="filter-section">
        <h3>TV Serial Filter</h3>
        <Select name="genre" options={genres} />
        <Select name="language" options={languages} />
      </div>
    </>
  );
};
