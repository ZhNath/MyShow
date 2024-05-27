import { useState, useEffect } from "react";
import { ResultOfSearchingById } from "../../assets/utils/ResultOfSearchingById";
import { FromListToList } from "../../assets/utils/FromListToList";
import { LabelAndInput } from "./LabelAndInput";
import { EpisodeTracker } from "./EpisodeTracker";
import {
  getTvStateFromLocalStorage,
  saveTvStateToLocalStorage,
  deleteTvStateFromLocalStorage,
} from "../../assets/utils/LocalStorage";
import { Link } from "react-router-dom";

export const WatchListCard = ({ id }) => {
  const tv = ResultOfSearchingById(id);

  const [statusTV, setStatusTV] = useState(
    localStorage.getItem(`statusTV-${id}`) || ""
  );

  const [tvState, setTVState] = useState(() => getTvStateFromLocalStorage(id));

  useEffect(() => {
    localStorage.setItem(`statusTV-${id}`, statusTV);
  }, [statusTV, id]);

  useEffect(() => {
    saveTvStateToLocalStorage(id, tvState);
  }, [tvState, id]);

  const initialVisibility = statusTV ? "hidden" : "visible";

  const [visibilityInput, setVisibilityInput] = useState(initialVisibility);
  const [visibilityDev, setVisibilityDev] = useState(
    initialVisibility === "visible" ? "hidden" : "visible"
  );

  const [visibilitySeasons, setVisibilitySeasons] = useState(false);
  const [isCurtain, setIsCurtain] = useState(false);

  const handleRadioChange = (event) => {
    const newStatus = event.target.value.replace(/\s+/g, "");
    const oldStatus = statusTV.replace(/\s+/g, "");

    if (newStatus !== oldStatus) {
      FromListToList({ id, newStatus, oldStatus });
      setStatusTV(event.target.value);

      if (newStatus === "Watching") {
        const newState = {
          name: tv?.name,
          seasons: Array.isArray(tv?.seasons)
            ? tv?.seasons.map((season) => ({
                name: season.name,
                episodes: Array.from(
                  { length: season?.episodeCount },
                  (_, i) => ({
                    episodeNumber: i + 1,
                    watched: false,
                  })
                ),
                isChecked: false,
              }))
            : [],
        };
        setTVState(newState);
        saveTvStateToLocalStorage(id, newState);
      } else if (oldStatus === "Watching") {
        setTVState({});
        deleteTvStateFromLocalStorage(id);
      }
    }

    setVisibilityInput("hidden");
    setVisibilityDev("visible");
  };

  const handleDivStatus = () => {
    setVisibilityInput("visible");
    setVisibilityDev("hidden");
  };

  const handleOnClickSeasons = () => {
    setVisibilitySeasons(true);
    setIsCurtain(true);
  };

  const handleOnClickCurtain = () => {
    setVisibilitySeasons(false);
    setIsCurtain(false);
  };

  return (
    <>
      <Link to={`/filter/${tv.id}`}>
        <img src={tv?.image} alt={tv.name} />
      </Link>
      <div className="nameBox">
        <p>{tv?.voteAverage}</p>
        <h3>{tv?.name}</h3>
        <span>{tv?.statusbar}</span>
      </div>
      <span className="onAir">On Air: {tv?.date}</span>
      <span className="overview">{tv?.overview}</span>
      <div className="episodes">
        <p>Episodes: {tv?.numberOfEpisodes} </p>
        <p>Seasons: {tv?.numberOfSeasons} </p>
        <p>
          {" "}
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
        <span className="seasons" onClick={handleOnClickSeasons}>
          Track Episodes{" "}
        </span>
      )}
      <div
        className={`${isCurtain ? "curtain" : ""}`}
        onClick={handleOnClickCurtain}
      ></div>
      <EpisodeTracker
        tv={tv}
        visibilitySeasons={visibilitySeasons}
        tvState={tvState}
        setTVState={setTVState}
      />
    </>
  );
};
