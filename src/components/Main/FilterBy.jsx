import { useState, useEffect } from "react";
import { genresList, fetchFilterData } from "../../assets/domain/apiClient";

export const FilterBy = () => {
  const [genres, setGenres] = useState([]);
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await genresList();
      setGenres(data);
    };
    fetchGenres();
  }, []);

  function Select({ name, options }) {
    const handleFilterChange = async (event) => {
      const selected = event.target.value;
      console.log(selected);
      const data = await fetchFilterData(`with_genres=%20${selected}`);
      setResultList(data);
      console.log(data);
    };

    return (
      <select name={name} onChange={handleFilterChange}>
        <option value="">Select {name}</option>
        {options?.map((option) => (
          <option key={option?.id} value={option?.id}>
            {option?.name}
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
        <Select name="genre" options={genres} />
        <Select name="genre" options={genres} />
      </div>
      {console.log(resultList)}
    </>
  );
};
