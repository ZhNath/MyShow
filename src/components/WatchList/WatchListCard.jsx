import { ResultOfSearchingById } from "../../assets/utils/ResultOfSearchingById";
import { useState, useEffect } from "react";
import { LabelAndInput } from "./LabelAndInput";
import { addTVtoList } from "../../assets/domain/apiClient";

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
    setVisibilityInput("visible");
    setVisibilityDev("hidden");
  }

  useEffect(() => {
    if (statusTV) {
      const list_id = localStorage.getItem(`idList${statusTV}`);
      if (list_id) {
        addTVtoList(list_id, tv.id);
      }
    }
  }, [statusTV, id]);

  return (
    <>
      {console.log(localStorage.getItem(`session_id`))}
      {console.log(id)}
      {console.log(localStorage.getItem(`statusTV-${id}`))}
      {console.log(localStorage.getItem(`idList${statusTV}`))}
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
        <LabelAndInput
          id={id}
          value="WantToWatch"
          onClick={handleRadioChange}
        />
        <LabelAndInput id={id} value="Watching" onClick={handleRadioChange} />
        <LabelAndInput id={id} value="Completed" onClick={handleRadioChange} />
        <LabelAndInput id={id} value="Dropped" onClick={handleRadioChange} />
      </div>
      <div
        className="status"
        style={{ visibility: visibilityDev }}
        onClick={handleDivStatus}
      >
        {statusTV}{" "}
      </div>
      {statusTV === "Watching" && (
        <div className="watching">
          {tv?.seasons?.map((season) => (
            <p key={season?.seasonNumber}>{season?.name}</p>
          ))}
        </div>
      )}
    </>
  );
};
