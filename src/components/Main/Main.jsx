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
  const [actorFilterList, setActorFilterList] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const requests = Array.from({ length: 10 }, (_, i) =>
          dataFetcher(`tv/popular?page=${i + 1}&`)
        );
        const responses = await Promise.all(requests);
        const allResults = responses.flatMap((response) => response.results);

        setAllData(allResults);
        setGallery(allResults);

      } catch (error) {
        console.error("Failed to fetch popular TV shows:", error);
      }
    };

    fetchPopular();
  }, []); 

  const handleSubmitOnClick = () => {

    const genreFilterActive = filterList.length > 0;
    const languageFilterActive = languageFilterList.length > 0;
    const actorFilterActive = actorFilterList.length > 0;

        
    if (genreFilterActive || languageFilterActive || actorFilterActive) {
      const filteredData = allData.filter((tv) => {
        const genreMatch = !genreFilterActive || filterList.every((genreId) => tv.genre_ids.includes(genreId));
        const languageMatch = !languageFilterActive || languageFilterList.includes(tv.original_language);
        const actorMatch = !actorFilterActive || actorFilterList.every((actor) => tv.actors && tv.actors.includes(actor));

        return genreMatch && languageMatch && actorMatch;
      });
          
  
      setGallery(filteredData);
    } else {
      setGallery(allData);
    }

  };

  return (
    <div className="main">
      <FilterBy
        filterList={filterList}
        setFilterList={setFilterList}
        setLanguageFilterList={setLanguageFilterList}
        setActorFilterList={setActorFilterList}
        onSubmit={handleSubmitOnClick}
      />
      <div className="main_container">
        {gallery?.map((tv) => (
          <Link to={`/filter/${tv.id}`} key={tv.id} className="main_card">
            <img src={`${IMG_URL}${tv.poster_path}`} alt={tv.name} />
            <h4>{tv.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};
