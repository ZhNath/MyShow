import { useState, useEffect } from "react";
import { dataFetcher, genresList } from "../../assets/domain/apiClient";

export const FilterBy = () => {
  const [name, setName] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await genresList();
      setGenres(data);
    };
    fetchGenres();
  }, []);

  //   const fetchFilterData = async (sortBy) => {
  //     const data = await dataFetcher(`/discover/tv?{sortBy}&`);
  //     console.log(data);
  //     return data;
  //   };

  //   function Input({ name, placeholder }) {
  //     return (
  //       <input
  //         type="text"
  //         name={name}
  //         onChange={handleFilterChange}
  //         placeholder={placeholder}
  //       />
  //     );
  //   }

  function Select({ name, options }) {
    const handleFilterChange = (event) => {
      const selectedGenre = event.target.value;
      fetchFilterData(`with_genres=${selectedGenre}`);
    };

    return (
      <select name={name} onChange={handleFilterChange}>
        <option value="">Select {name}</option>
        {options?.map((option) => (
          <option key={option?.id} value={option?.name}>
            {option?.name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <>
      <div className="filter-section">
        {console.log("genres", genres)}
        <h3>TV Serial Filter</h3>
        <Select name="genre" options={genres} />
        {/* <Input name="name" placeholder="by Actor" value="" />
        <Input name="popularity" placeholder="by Popularity" />
        <Input name="language" placeholder="by Language" /> */}

        {/* <select onChange={(e) => setSelectedSort(e.target.value)}
          value={selectedSort}
        >
          
          <option value="">Select Sort Option</option>
          <option value="name">Name</option>
          <option value="popularity">Popularity</option>
          <option value="actors">Actors</option>
        </select> */}

        {/* <button onClick={handleFilterChange}>Filter</button> */}

        <div className="names-list">
          <ul>
            {name.map((n, index) => (
              <li key={index}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
