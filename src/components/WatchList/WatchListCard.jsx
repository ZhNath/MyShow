import { ResultOfSearchingById } from "../../assets/utils/ResultOfSearchingById";
import { useState, useEffect } from "react";
import { LabelAndInput } from "./LabelAndInput";
import { addTVtoList, removeTVfromList } from "../../assets/domain/apiClient";

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
    const newStatus = event.target.value.replace(/\s+/g, "");
    const oldStatus = statusTV.replace(/\s+/g, "");

    if (newStatus !== oldStatus) {
      const oldListId = localStorage.getItem(`idList${oldStatus}`);
      if (oldListId) {
        removeTVfromList(oldListId, id)
          .then((response) => {
            console.log("Removed from old list:", response);
          })
          .catch((error) => {
            console.error("Error removing from old list:", error);
          });
      }

      const newListId = localStorage.getItem(`idList${newStatus}`);
      if (newListId) {
        addTVtoList(newListId, id)
          .then((response) => {
            console.log("Added to old list:", response);
          })
          .catch((error) => {
            console.error("Error adding to old list:", error);
          });
      }

      setStatusTV(event.target.value);
    }

    setVisibilityInput("hidden");
    setVisibilityDev("visible");
  }

  function handleDivStatus() {
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
        <p>
          {console.log(tv)}
          {tv?.episodeRuntime?.[0] &&
            `Episode runtime: ${tv.episodeRuntime} min`}
        </p>
      </div>
      <div className="radiobuttons" style={{ visibility: visibilityInput }}>
        <LabelAndInput
          id={id}
          value="Want To Watch"
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
