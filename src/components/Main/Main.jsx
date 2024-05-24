import { IMG_URL } from "../../assets/domain/apiClient";
import { dataFetcher } from "../../assets/domain/apiClient";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Main = () => {
  const [gallery, setGallery] = useState();

  useEffect(() => {
    const popular = async () => {
      const data = await dataFetcher("tv/popular?");
      setGallery(data);
    };
    popular();
  }, []);

  return (
    <div className="main">
      <div className="main_container">
        {gallery?.results?.map((tv) => (
          <Link to={`/filter/${tv.id}`} key={tv.id} className="main_card">
            <img src={`${IMG_URL}${tv.poster_path}`} alt={tv.name} />
            <h3>{tv.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
