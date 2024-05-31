import { IMG_URL } from "../../assets/domain/apiClient";
import { dataFetcher } from "../../assets/domain/apiClient";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FilterBy } from "./FilterBy";

export const Main = () => {
  const [gallery, setGallery] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [allData, setAllData] = useState([]);
  const [languageFilterList, setLanguageFilterList] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);

  useEffect(() => {
    const allResults = [];
    const fetchPopular = async () => {
      try {
        for (let i = 1; i <= 20; i++) {
          const data = await dataFetcher(`tv/popular?page=${i}&`);
          allResults.push(...data.results);
        }
        const uniqueResults = Array.from(
          new Set(allResults.map((a) => a.id))
        ).map((id) => allResults.find((a) => a.id === id));

        setGallery(uniqueResults);
        setAllData(uniqueResults);
      } catch (error) {
        console.error("Failed to fetch popular TV shows:", error);
      }
    };

    fetchPopular();
  }, []);

  const handleSubmitOnClick = () => {
    const genreFilterActive = filterList.length > 0;
    const languageFilterActive = languageFilterList.length > 0;
    const ratingFilterActive = ratingValue > 0;

    if (genreFilterActive || languageFilterActive || ratingFilterActive) {
      const filteredData = allData.filter((tv) => {
        const genreMatch =
          !genreFilterActive ||
          filterList.every((genreId) => tv.genre_ids.includes(genreId));

        const languageMatch =
          !languageFilterActive ||
          languageFilterList.includes(tv.original_language);

        const ratingMatch = !ratingValue || tv.vote_average >= ratingValue;
        return genreMatch && languageMatch && ratingMatch;
      });

      setGallery(filteredData);
    } else {
      setGallery(allData);
    }
  };

  return (
    <div className="main">
      {console.log("gallery", gallery)}
      <FilterBy
        filterList={filterList}
        setFilterList={setFilterList}
        setLanguageFilterList={setLanguageFilterList}
        setRatingValue={setRatingValue}
        ratingValue={ratingValue}
        onSubmit={handleSubmitOnClick}
      />
      <div className="main_container">
        {gallery?.map((tv) => (
          <Link to={`/filter/${tv.id}`} key={tv.id} className="main_card">
            <div className="image">
              <img src={`${IMG_URL}${tv.poster_path}`} alt={tv.name} />
              <div className="vote">{tv.vote_average.toFixed(1)}</div>
            </div>
            <h4>{tv.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};
