import { ResultOfSearchingById } from "../../assets/utils/ResultOfSearchingById";
import { useState, useEffect } from "react";

export const WatchListCard = ({ id }) => {
  const tv = ResultOfSearchingById(id);

  const [statusTV, setStatusTV] = useState(
    localStorage.getItem(`statusTV-${id}`) || ""
  );

  const initialVisibility = statusTV ? "hidden" : "visible";

  const [visibilityInput, setVisibilityInput] = useState(initialVisibility);
  const [visibilityDev, setVisibilityDev] = useState(!initialVisibility);

  useEffect(() => {
    localStorage.setItem(`statusTV-${id}`, statusTV);
  }, [statusTV, id]);

  function handleRadioChange(event) {
    setStatusTV(event.target.value);
    setVisibilityInput("hidden");
    setVisibilityDev("visible");
  }

  function handleDivStatus() {
    //     setStatusTV(event.target.value);
    setVisibilityInput("visible");
    setVisibilityDev("hidden");
  }

  return (
    <>
      <img src={tv?.image} alt={tv.name} />
      <div className="nameBox">
        <p>{tv?.voteAverage}</p>
        <h3>{tv?.name}</h3>
        <span>{tv?.statusbar}</span>
      </div>
      <span>{tv?.date}</span>
      <span>{tv?.overview}</span>
      <div>
        <p>Episodes: {tv?.numberOfEpisodes}</p>
        <p>Seasons: {tv?.numberOfSeasons}</p>
        <p>Episode runtime: {tv?.episodeRuntime}</p>
      </div>
      <div className="radiobuttons" style={{ visibility: visibilityInput }}>
        <label>
          <input
            type="radio"
            name={`statusTV-${id}`}
            value="Want to watch"
            onChange={handleRadioChange}
          />
          Want to watch
        </label>
        <label>
          <input
            type="radio"
            name={`statusTV-${id}`}
            value="Watching"
            onChange={handleRadioChange}
          />
          Watching
        </label>
        <label>
          <input
            type="radio"
            name={`statusTV-${id}`}
            value="Completed"
            onChange={handleRadioChange}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            name={`statusTV-${id}`}
            value="dropped"
            onChange={handleRadioChange}
          />
          Dropped
        </label>
      </div>
      <div
        className="status"
        style={{ visibility: visibilityDev }}
        onClick={handleDivStatus}
      >
        {statusTV}{" "}
      </div>
    </>
  );
};
