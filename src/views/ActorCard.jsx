import { useParams } from "react-router-dom";
import { fetchActor } from "../assets/domain/apiClient";
import { useEffect, useState } from "react";

export const ActorCard = () => {
  const name = useParams();
  const [actor, setActor] = useState();

  useEffect(() => {
    try {
      const getActor = async () => {
        const data = await fetchActor(name.id);
        setActor(data);
        console.log(data);
      };
      getActor();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="tvCard">
      <div className="left">
        <img
          src={`https://image.tmdb.org/t/p/original${actor?.results?.[0]?.profile_path}`}
          alt={actor?.name}
          style={{ width: "300px" }}
        />
      </div>
      <div className="right">
        <h1>{actor?.results?.[0]?.name}</h1>
        <div>
          <h2>Known for:</h2>
          <div>
            {actor?.results?.[0]?.known_for?.map((tv) => (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
                  alt="photo"
                />
                <h3 key={tv.id}>{tv.original_title}</h3>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
