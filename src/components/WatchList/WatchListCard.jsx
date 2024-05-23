import { ResultOfSearchingById } from "../../assets/utils/ResultOfSearchingById";
import { FromListToList } from "../../assets/utils/FromListToList";
import { getTvStateFromLocalStorage } from "../../assets/utils/LocalStorage";
import { saveTvStateToLocalStorage } from "../../assets/utils/LocalStorage";
import { useState, useEffect } from "react";
import { LabelAndInput } from "./LabelAndInput";
import { EpisodeTracker } from "./EpisodeTracker";

export const WatchListCard = ({ id }) => {
  const tv = ResultOfSearchingById(id);

  const [statusTV, setStatusTV] = useState(
    localStorage.getItem(`statusTV-${id}`) || ""
  );
  useEffect(() => {
    localStorage.setItem(`statusTV-${id}`, statusTV);
  }, [statusTV, id]);

  const [tvState, setTVState] = useState({});
  useEffect(() => {
    const savedState = getTvStateFromLocalStorage();
    setTVState(savedState);
  }, []);
  // ------------------------------------------------------
  const initialVisibility = statusTV ? "hidden" : "visible";

  const [visibilityInput, setVisibilityInput] = useState(initialVisibility);
  const [visibilityDev, setVisibilityDev] = useState(!initialVisibility);

  const [visibilitySeasons, setVisibilitySeasons] = useState(false);
  const [isCurtain, setIsCurtain] = useState(false);
  // --------------------------------------------------------
  function handleRadioChange(event) {
    const newStatus = event.target.value.replace(/\s+/g, "");
    const oldStatus = statusTV.replace(/\s+/g, "");

    if (newStatus !== oldStatus) {
      FromListToList({ id, newStatus, oldStatus });
      setStatusTV(event.target.value);

      if (newStatus === "Watching") {
        const newState = {
          ...tvState,
          [id]: {
            seasons: tv?.seasons?.map((season) => ({
              name: season.name,
              episodes: Array.from(
                { length: season?.episodeCount },
                (_, i) => ({
                  episodeNumber: i + 1,
                  watched: false,
                })
              ),
              isChecked: false,
            })),
          },
        };
        setTVState(newState);
        saveTvStateToLocalStorage(newState);
      }

      if (oldStatus === "Watching") {
        const newState = { ...tvState };
        delete newState[id];
        setTVState(newState);
        saveTvStateToLocalStorage(newState);
      }
    }
    setVisibilityInput("hidden");
    setVisibilityDev("visible");
  }

  function handleDivStatus() {
    setVisibilityInput("visible");
    setVisibilityDev("hidden");
  }

  function handleOnClickSeasons() {
    setVisibilitySeasons(true);
    setIsCurtain(true);
  }

  return (
    <>
      <img src={tv?.image} alt={tv.name} />
      <div className="nameBox">
        <p>{tv?.voteAverage}</p>
        <h3>{tv?.name}</h3>
        <span>{tv?.statusbar}</span>
      </div>
      <span>On Air: {tv?.date}</span>
      <span>{tv?.overview}</span>
      <div>
        <p>Episodes: {tv?.numberOfEpisodes}</p>
        <p>Seasons: {tv?.numberOfSeasons}</p>
        <p>
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
      {/* ***************************************** */}
      {statusTV === "Watching" && (
        <span className="seasons" onClick={handleOnClickSeasons}>
          Track Episodes{" "}
        </span>
      )}
      <div className={`${isCurtain ? "curtain" : ""}`}></div>
      {/* ********************************************* */}
      <EpisodeTracker
        tv={tv}
        visibilitySeasons={visibilitySeasons}
        tvState={tvState}
        setTVState={setTVState}
      />
    </>
  );
};
